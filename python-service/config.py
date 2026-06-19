import os
from dotenv import load_dotenv


load_dotenv(dotenv_path="../.env")


class Config:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    TRANSCRIPT_MODEL = "gemini-2.0-flash"
    TEXT_MODEL = "gemini-2.5-flash"

    VIDEO_PATH = "/tmp/temp.mp4"
    AUDIO_PATH = "/tmp/temp.mp3"