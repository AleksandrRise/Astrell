import whisper, os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv

from commands import Commands

app = Flask(__name__)
origin = "http://localhost:5173"
CORS(app, resources={r"*": {"origins": origin}})

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
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
    print(transcript)
    commands = Commands(transcript, ai)
    return commands.getSummarizeStr()


if __name__ == "__main__":
    app.run(port=5000)
