import whisper
from flask import Flask
from meta_ai_api import MetaAI
import json

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world!"

ai = MetaAI()

model = whisper.load_model("base")
result = model.transcribe("test.mp4")

msg = ('Make a single quiz according to a transcript and following the format without adding any your commects at all: {"question": "(your question)", "answer1": "(your answer 1)", "answer2": "(your answer 2)", '
       '"answer3": "(your answer 3)", "answer4": "(your answer 4)"} . Transcript you use: ') + result["text"]
response = ai.prompt(message=msg)

res = json.loads(response['message'])
print(res["question"])



