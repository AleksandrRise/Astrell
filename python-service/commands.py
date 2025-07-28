import json


class Commands:
    def __init__(self, transcript, ai):
        self.transcript = transcript
        self.ai = ai

    def getQuizJSON(self):
        msg = ((
                  'Make a single quiz with only one possible answer strictly according to a transcript and following the format without adding any your comments at all: '
                  '{"question": "(your question)", "answer1": {"answer": "(your answer 1)", "correct": "(true/false)}, "answer2": {"answer": "(your answer 2)", "correct": "(true/false)}, '
                  '"answer3": {"answer": "(your answer 3)", "correct": "(true/false)}, "answer4": {"answer": "(your answer 4)", "correct": "(true/false)}} . Transcript of a lecture you use: ') +
               self.transcript["text"])
        return self.convertToJSON(msg)

    def getCardJSON(self):
        msg = (
                  'Make a single question and answer strictly according to a transcript and following the format without adding any of your comments at all: '
                  '{"question": "(the question)", "answer": "(the answer to the question)" . Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToJSON(msg)

    def getHighlightStr(self) -> str:
        msg = (
                  'Highlight key concepts strictly according to a transcript. The text must be comprehensive enough for a student at a college. Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToStr(msg)

    def getSummarizeStr(self) -> str:
        msg = (
                  'Make a summarization of a transcript in 0-200 words. The text must be comprehensive enough for a student at a college. Transcript of a lecture you use: ') + \
              self.transcript["text"]
        return self.convertToStr(msg)

################################################

    def convertToJSON(self, msg: str):
        response = self.ai.models.generate_content(
            model="gemini-2.5-flash",
            contents=msg
        )
        return json.loads(response.text)

    def convertToStr(self, msg: str) -> str:
        response = self.ai.models.generate_content(
            model="gemini-2.5-flash",
            contents=msg
        )
        return response.text