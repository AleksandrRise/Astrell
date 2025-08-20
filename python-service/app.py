import os
from moviepy.editor import VideoFileClip
from flask import Flask, request, send_file
from flask_cors import CORS
from google import genai
from dotenv import load_dotenv

from commands import Commands

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = Flask(__name__)

CORS(app, resources={r"*": {
    "origins": [
        "http://localhost:5173", "http://127.0.0.1:5173", "https://astrell.net", "https://www.astrell.net"
    ],
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    "allow_headers": ["Content-Type"]
}})

ai = genai.Client(api_key=GEMINI_API_KEY)

transcript = ""
videoFile = ""


@app.route('/api/v1/uploadVideo', methods=['POST'])
def uploadVideo() -> str:
    global videoFile
    videoFile = request.files['file']
    videoFile.save("tmp/temp.mp4")

    # MP4 -> MP3
    video = VideoFileClip(os.path.join("tmp", "temp.mp4"))
    video.audio.write_audiofile(os.path.join("tmp", "temp.mp3"))

    # Transcribing
    global transcript

    audioFile = ai.files.upload(file="tmp/temp.mp3")
    commands = Commands(transcript, ai)
    transcript = commands.getTranscript(audioFile)

    return transcript


@app.route('/api/v1/getVideo', methods=['GET'])
def getVideo():
    return send_file("tmp/temp.mp4", "video/mp4")


@app.route('/api/v1/summarize', methods=['GET'])
def summarize() -> str:
    commands = Commands(transcript, ai)
    return commands.getSummarizeStr()


@app.route('/api/v1/getQuiz', methods=['GET'])
def getQuiz():
    difficulty = request.args.get('difficulty')
    questionsNum = request.args.get('questionsNum')

    commands = Commands(transcript, ai)

    if difficulty and questionsNum:
        quiz = commands.getQuizJSON(difficulty, questionsNum)
        return quiz

    return "Bad request. Invalid input provided.", 400


@app.route('/api/v1/getCard', methods=['GET'])
def getExam():
    commands = Commands(transcript, ai)
    return commands.getCardJSON()


@app.route('/api/v1/gethighlight', methods=['GET'])
def getHighlight() -> str:
    commands = Commands(transcript, ai)
    return commands.getHighlightStr()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
