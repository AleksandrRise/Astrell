import whisper
from flask import Flask
from meta_ai_api import MetaAI
from commands import Commands

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world!"

ai = MetaAI()

model = whisper.load_model("base")
transcript = model.transcribe("test.mp4")

commands = Commands(transcript, ai)

print(commands.getQuizJSON())



