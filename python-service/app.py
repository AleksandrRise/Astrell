import os

import whisper
from flask import Flask, request, send_file
from flask_cors import CORS
from google import genai
from dotenv import load_dotenv

from commands import Commands

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


app = Flask(__name__)

CORS(app, resources={r"*": {"origins": [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]}})

ai = genai.Client(api_key=GEMINI_API_KEY)

transcript = ""
video = ""


@app.route('/api/v1/uploadVideo', methods=['POST'])
def uploadVideo() -> str:
    global video
    video = request.files['file']
    video.save("videos/temp")

    model = whisper.load_model("tiny")
    global transcript
    transcript = model.transcribe("videos/temp")

    return transcript


@app.route('/api/v1/getVideo', methods=['GET'])
def getVideo():
    return send_file("videos/temp", "video/mp4")


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
    app.run(host="0.0.0.0")
