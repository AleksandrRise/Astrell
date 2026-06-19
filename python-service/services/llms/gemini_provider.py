from google import genai

from config import Config


class GeminiProvider:
    def __init__(self):
        self.client = genai.Client(api_key=Config.GEMINI_API_KEY)

    def generate_from_audio(self, prompt, audio_path):
        audio_file = self.client.files.upload(file=audio_path)

        response = self.client.models.generate_content(
            model=Config.TRANSCRIPT_MODEL,
            contents=[prompt, audio_file],
        )

        return response.text

    def generate_text(self, prompt):
        response = self.client.models.generate_content(
            model=Config.TEXT_MODEL,
            contents=prompt,
        )

        return response.text