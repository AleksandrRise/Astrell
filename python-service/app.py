import whisper
from flask import Flask, request, abort
from flask_cors import CORS
from meta_ai_api import MetaAI

from commands import Commands

app = Flask(__name__)
origin = "http://localhost:5173"
CORS(app, resources={r"*": {"origins": origin}})

ai = MetaAI()
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
