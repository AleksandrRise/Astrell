import { useState } from "react"
import Question from "./Question.tsx"
import Circles from "./Circles"

export default function QuestionBlock() {

    // States
    const [ activeIndex, setActiveIndex ] = useState<number>(0)

    const questions = [
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
                {answer: "Tomorrow", correct: true},
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

    // Classes
    const wrapperClasses = "animate-[fadeIn_1s_1s_forwards] w-273 h-full bg-black/20 opacity-0 \
        rounded-3xl mt-44 logoGradient-bg-2 p-[2px] backdrop-blur-[100px] \
        shadow-[0_0_16px_5px_rgba(28,154,214,0.25)] text-white"
    const containerClasses = "mx-18.5 pt-15 flex justify-between"
    const questionClasses = ""

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>
                <div className={questionClasses}>
                    {questions.map((q, key) => 
                        <Question question={q} index={key} key={key} />
                    )}
                </div>

                <Circles>
                    {questions.map((q, key) => 
                        <Circles.Circle 
                            index={key} 
                            activeIndex={activeIndex} 
                            setActiveIndex={setActiveIndex}
                            key={key} />
                    )}
                </Circles>
            </div>
        </section>
    )
}