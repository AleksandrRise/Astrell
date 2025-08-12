import json


class Commands:
    def __init__(self, transcript, ai):
        self.transcript = transcript
        self.ai = ai

    def getQuizJSON(self, difficulty, questionsNum):
        prompt = f"""
        Return ONLY valid JSON. No prose, no markdown fences, no comments.

        Schema:
        {{
          "questions": [
            {{
              "question": "string",
              "answers": [
                {{ "answer": "string", "correct": true|false }},
                {{ "answer": "string", "correct": true|false }},
                {{ "answer": "string", "correct": true|false }},
                {{ "answer": "string", "correct": true|false }}
              ]
            }}
          ]
        }}

        Constraints:
        - Each question is different from another.
        - Exactly {questionsNum} questions.
        - Difficulty: "{difficulty}".
        - Base ALL content strictly on this transcript: {self.transcript["text"]}
        """
        return self.convertToJSON(prompt)

    def getCardJSON(self):
        prompt = (
                  'Make a single question and answer strictly according to a transcript and following the format without adding any of your comments at all: '
                  '{"question": "(the question)", "answer": "(the answer to the question)" . Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToJSON(prompt)

    def getHighlightStr(self) -> str:
        prompt = (
                  'Highlight key concepts strictly according to a transcript. The text must be comprehensive enough for a student at a college. Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToStr(prompt)

    def getSummarizeStr(self) -> str:
        prompt = (
                  'Make a summarization of a transcript in 0-200 words. The text must be comprehensive enough for a student at a college. Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToStr(prompt)

################################################

    def convertToJSON(self, prompt: str):
        response = self.ai.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        return json.loads(response.text)

    def convertToStr(self, prompt: str) -> str:
        response = self.ai.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        return response.text