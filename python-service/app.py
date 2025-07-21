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

def getQuizJSON():
    msg = ('Make a single quiz according to a transcript and following the format without adding any your comments at all: '
           '{"question": "(your question)", "answer1": "(your answer 1)", "answer2": "(your answer 2)", '
            '"answer3": "(your answer 3)", "answer4": "(your answer 4)"} . Transcript you use: ') + result["text"]
    convertToJSON(msg)

def getCardJSON():
    msg = ('Make a single question and answer according to a transcript and following the format without adding any of your comments at all: '
           '{"question": "(the question)", "answer": "(the answer to the question)" . Transcript you use: ') + result["text"]
    convertToJSON(msg)

def getHighlightStr() -> str:
    msg = ('Highlight key concepts according to a transcript. The text must be comprehensive enough for a student at a college. Transcript you use: ') + result["text"]
    return convertToStr(msg)

def getSummarizeStr() -> str:
    msg = ('Make a summarization of a transcript in 200-300 words without adding any of your comments at all. The text must be comprehensive enough for a student at a college. Transcript you use: ') + result["text"]
    return convertToStr(msg)

def convertToJSON(msg: str):
    response = ai.prompt(message=msg)
    return json.loads(response['message'])

def convertToStr(msg: str) -> str:
    response = ai.prompt(message=msg)
    return response['message']


print(getHighlightStr())



