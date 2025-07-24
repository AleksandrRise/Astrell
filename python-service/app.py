import whisper
from flask import Flask, request
from flask_cors import CORS
from meta_ai_api import MetaAI

from commands import Commands

app = Flask(__name__)
origin = "http://localhost:5173"
CORS(app)

ai = MetaAI()
model = whisper.load_model("base")


@app.route('/api/v1/uploadVideo', methods=['POST'])
def uploadVideo():
    video = request.files['file']
    filename = video.filename

    video.save(f"videos/{filename}")

    transcript = model.transcribe(f"videos/{filename}")
    print(transcript["text"])

    return transcript


if __name__ == "__main__":
    app.run(port=5000)

# commands = Commands(transcript, ai)
