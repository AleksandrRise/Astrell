import whisper
from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI
from commands import Commands

app = Flask(__name__)
origin = "http://localhost:5173"
CORS(app)

ai = MetaAI()
model = whisper.load_model("base")

UPLOAD_DIR = "/videos"


@app.route('/api/v1/uploadVideo', methods=['POST'])
def uploadVideo():
    if request.headers.get('Content-Type') == 'multipart/form-data':
        rawdata = request.get_data()

        transcript = model.transcribe("videos/test.mp4")

        return transcript
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(port=5000)

# commands = Commands(transcript, ai)
