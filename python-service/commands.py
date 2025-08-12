import json


class Commands:
    def __init__(self, transcript, ai):
        self.transcript = transcript
        self.ai = ai

    def getQuizJSON(self, difficulty, questionsNum):
        msg = ((
                  '''Provide a single quiz strictly in a JSON format with ''' + questionsNum + ''' questions, 
                  4 possible answers, and ''' + difficulty + ''' level of difficulty strictly 
                  according to a transcript and following the JSON format without adding any of your comments at all.  
                  The Format you must follow: 
                  
                  questions: [
                    {question: "When was it abandoned?", 
                        answers: [
                            {answer: "Today", correct: false},
                            {answer: "Yesterday", correct: false},
                            {answer: "Tomorrow", correct: true},
                            {answer: "1900 BC", correct: false},
                        ],
                    }, 
                    {question: "When was it born?", 
                        answers: [
                            {answer: "Today", correct: true},
                            {answer: "Yesterday", correct: false},
                            {answer: "Tomorrow", correct: false},
                            {answer: "1800 BC", correct: false},
                        ],
                    }, 
                    {question: "When was it returned?", 
                        answers: [
                            {answer: "Today", correct: false},
                            {answer: "Yesterday", correct: false},
                            {answer: "Tomorrow", correct: false},
                            {answer: "200030 BC", correct: true},           
                        ],
                    },
                  ]
                  
                  The transcript you must follow: ''' + self.transcript["text"]))
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