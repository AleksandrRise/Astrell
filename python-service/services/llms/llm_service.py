import json

from prompts import (
    card_prompt,
    highlight_prompt,
    quiz_prompt,
    summary_prompt,
    transcript_prompt,
)
from services.llms.gemini_provider import GeminiProvider


class LLMService:
    def __init__(self):
        self.provider = GeminiProvider()

    def transcribe(self, audio_path):
        return self.provider.generate_from_audio(
            transcript_prompt(),
            audio_path,
        )

    def summarize(self, transcript):
        return self.provider.generate_text(summary_prompt(transcript))

    def get_highlight(self, transcript):
        return self.provider.generate_text(highlight_prompt(transcript))

    def get_quiz(self, transcript, difficulty, questions_num):
        response = self.provider.generate_text(
            quiz_prompt(transcript, difficulty, questions_num)
        )

        return json.loads(response)

    def get_card(self, transcript):
        response = self.provider.generate_text(card_prompt(transcript))

        return json.loads(response)