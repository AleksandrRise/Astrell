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
        - Randomize the position of the correct answer across different questions so that it is not consistently in the same answer slot.
        - Exactly {questionsNum} questions.
        - Difficulty: "{difficulty}".
        - Base ALL content strictly on this transcript: {self.transcript["text"]}
        """
        return self.convertToJSON(prompt)

    def getCardJSON(self):
        prompt = (
                "Generate exactly ONE question and its corresponding answer, based solely on the provided lecture transcript. "
                "Follow this exact JSON format without adding any commentary, explanations, or extra text:\n\n"
                '{"question": "…", "answer": "…"}\n\n'
                "Lecture transcript:\n" + self.transcript["text"]
        )
        return self.convertToJSON(prompt)

    def getHighlightStr(self) -> str:
        prompt = (
                "Extract the key concepts from the provided lecture transcript. "
                "Write them as plain text, without any formatting symbols (no bold, italics, or special characters). "
                "The highlights must be clear and detailed enough for a college-level student to understand the main points, "
                "but concise enough to avoid unnecessary information.\n\n"
                "Lecture transcript:\n" + self.transcript["text"]
        )
        return self.convertToStr(prompt)

    def getSummarizeStr(self) -> str:
        prompt = (
                "Summarize the following lecture transcript in no more than 200 words. "
                "The summary must be clear, concise, and comprehensive enough for a college-level student to understand "
                "the main ideas, without adding extra commentary, irrelevant details, or any formatting styles "
                "(no bold, italics, or special characters). Write only plain text.\n\n"
                "Lecture transcript:\n" + self.transcript["text"]
        )
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