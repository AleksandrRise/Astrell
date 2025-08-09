import Answer from "./Answer"

export default function QuestionBlock() {

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
    const containerClasses = "pl-37.5 pr-75"
    const questionClasses = ""
    const circlesClasses = ""
    const circleClasses = ""

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>
                <div className={questionClasses}>
                    {questions.map((q, key) => 
                        <Answer q={q} index={key} key={key} />
                    )}
                </div>

                <div className={circlesClasses}>
                    {questions.map(() => 
                        <div className={circleClasses}></div>
                    )}
                </div>
            </div>
        </section>
    )
}