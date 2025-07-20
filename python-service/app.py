import whisper
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world!"


model = whisper.load_model("base")
result = model.transcribe("test.mp4")
print(result["text"])