import json


class Commands:
    def __init__(self, result, ai):
        self.result = result
        self.ai = ai

    def getQuizJSON(self):
        msg = ((
                  'Make a single quiz according to a transcript and following the format without adding any your comments at all: '
                  '{"question": "(your question)", "answer1": "(your answer 1)", "answer2": "(your answer 2)", '
                  '"answer3": "(your answer 3)", "answer4": "(your answer 4)"} . Transcript you use: ') +
               self.result["text"])
        return self.convertToJSON(msg)

    def getCardJSON(self):
        msg = (
                  'Make a single question and answer according to a transcript and following the format without adding any of your comments at all: '
                  '{"question": "(the question)", "answer": "(the answer to the question)" . Transcript you use: ') + \
              self.result["text"]
        return self.convertToJSON(msg)

    def getHighlightStr(self) -> str:
        msg = (
                  'Highlight key concepts according to a transcript. The text must be comprehensive enough for a student at a college. Transcript you use: ') + \
              self.result["text"]
        return self.convertToStr(msg)

    def getSummarizeStr(self) -> str:
        msg = (
                  'Make a summarization of a transcript in 200-300 words without adding any of your comments at all. The text must be comprehensive enough for a student at a college. Transcript you use: ') + \
              self.result["text"]
        return self.convertToStr(msg)

################################################

    def convertToJSON(self, msg: str):
        response = self.ai.prompt(message=msg)
        return json.loads(response['message'])

    def convertToStr(self, msg: str) -> str:
        response = self.ai.prompt(message=msg)
        return response['message']