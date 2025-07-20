import moviepy.editor as mp
import speech_recognition as sr
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World!"

if __name__ == "__main__":
    app.run()

# Load the video
video = mp.VideoFileClip("top5box.mp4")

# Extract the audio from the video
audio_file = video.audio
audio_file.write_audiofile("top5box.wav")

# Initialize recognizer
r = sr.Recognizer()

# Load the audio file
with sr.AudioFile("top5box.wav") as source:
    data = r.record(source)

# Convert speech to text
text = r.recognize_google(data)

# Print the text
print("\nThe resultant text from video is: \n")
print(text)