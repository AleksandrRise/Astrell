from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from google.genai.errors import ClientError

from services.llms.llm_service import LLMService
from services.video_service import VideoService


app = Flask(__name__)

CORS(app, resources={r"*": {
    "origins": [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://astrell.net",
        "https://www.astrell.net",
    ],
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type"],
}})

llm_service = LLMService()
video_service = VideoService()


def handle_llm_error(error):
    if error.status_code == 429:
        return jsonify({"error": "LLM quota exceeded. Try again later."}), 429

    return jsonify({"error": "LLM service failed."}), 502


@app.route("/api/v1/uploadVideo", methods=["POST"])
def upload_video():
    video_file = request.files.get("file")

    if not video_file:
        return jsonify({"error": "No video file provided."}), 400

    try:
        video_path = video_service.save_video(video_file)
        audio_path = video_service.extract_audio(video_path)
        transcript = llm_service.transcribe(audio_path)

        return transcript

    except ClientError as error:
        return handle_llm_error(error)

    except Exception:
        return jsonify({"error": "Video upload failed."}), 500
    

@app.route("/api/v1/getVideo", methods=["GET"])
def get_video():
    return send_file(video_service.video_path, mimetype="video/mp4")


@app.route("/api/v1/summarize", methods=["GET"])
def summarize():
    transcript = request.args.get("transcript")

    if not transcript:
        return jsonify({"error": "Missing transcript."}), 400

    try:
        return llm_service.summarize(transcript)

    except ClientError as error:
        return handle_llm_error(error)
    

@app.route("/api/v1/gethighlight", methods=["GET"])
def get_highlight():
    transcript = request.args.get("transcript")

    if not transcript:
        return jsonify({"error": "Missing transcript."}), 400

    try:
        return llm_service.get_highlight(transcript)

    except ClientError as error:
        return handle_llm_error(error)
    

@app.route("/api/v1/getQuiz", methods=["GET"])
def get_quiz():
    transcript = request.args.get("transcript")
    difficulty = request.args.get("difficulty")
    questions_num = request.args.get("questionsNum")

    if not transcript or not difficulty or not questions_num:
        return jsonify({"error": "Invalid input provided."}), 400

    try:
        return jsonify(llm_service.get_quiz(transcript, difficulty, questions_num))

    except ClientError as error:
        return handle_llm_error(error)
    

@app.route("/api/v1/getCard", methods=["GET"])
def get_card():
    transcript = request.args.get("transcript")

    if not transcript:
        return jsonify({"error": "Missing transcript."}), 400

    try:
        return jsonify(llm_service.get_card(transcript))

    except ClientError as error:
        return handle_llm_error(error)
    

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
