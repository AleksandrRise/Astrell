export default function QuestionBlock() {

    const questions = [
        {question: "When was it abandoned?", 
            answer1: {answer: "Today", correct: false},
            answer2: {answer: "Yesterday", correct: false},
            answer3: {answer: "Tomorrow", correct: true},
            answer4: {answer: "1900 BC", correct: false},
        }, 
        {question: "When was it born?", 
            answer1: {answer: "Today", correct: true},
            answer2: {answer: "Yesterday", correct: false},
            answer3: {answer: "Tomorrow", correct: true},
            answer4: {answer: "1800 BC", correct: false},
        }, 
        {question: "When was it returned?", 
            answer1: {answer: "Today", correct: false},
            answer2: {answer: "Yesterday", correct: false},
            answer3: {answer: "Tomorrow", correct: false},
            answer4: {answer: "200030 BC", correct: true},
        }
    ]

    return (
        <h1>Started!</h1>
    )
}