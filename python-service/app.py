import whisper
from flask import Flask
from meta_ai_api import MetaAI

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world!"

ai = MetaAI()

model = whisper.load_model("base")
result = model.transcribe("test.mp4")

msg = "Explain here what this video is about in a few words. Transcript: " + result["text"]
response = ai.prompt(message=msg)

print(response['message'])

