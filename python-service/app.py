import whisper
from flask import Flask, request
from flask_cors import CORS
from google import genai

from commands import Commands

app = Flask(__name__)
origin = "http://localhost:5173"
CORS(app, resources={r"*": {"origins": origin}})

ai = genai.Client()
model = whisper.load_model("base")

transcript = ""
video = ""


@app.route('/api/v1/uploadVideo', methods=['POST'])
def uploadVideo() -> str:
    global video
    video = request.files['file']
    video.save(f"videos/temp")

    global transcript
    transcript = model.transcribe(f"videos/temp")

    return transcript


@app.route('/api/v1/summarize', methods=['GET'])
def summarize() -> str:
    commands = Commands(transcript, ai)
    return commands.getSummarizeStr()


@app.route('/api/v1/getquiz', methods=['GET'])
def getQuiz():
    commands = Commands(transcript, ai)
    return commands.getQuizJSON()


@app.route('/api/v1/getcard', methods=['GET'])
def getExam():
    commands = Commands(transcript, ai)
    return commands.getCardJSON()


@app.route('/api/v1/gethighlight', methods=['GET'])
def getHighlight() -> str:
    commands = Commands(transcript, ai)
    return commands.getHighlightStr()


if __name__ == "__main__":
    app.run(port=5000)
