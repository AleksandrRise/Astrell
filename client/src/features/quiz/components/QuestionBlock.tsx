import { useState } from "react"
import Question from "./Question.tsx"
import Circles from "./Circles"
import { handleBgColor } from "../utils/handleBgColor.ts"
import type { QuestionsType } from "../utils/QuestionsType.ts"


export default function QuestionBlock({ questions, correctArr, setCorrectArr }: QuestionsType) {


    // States
    const [ activeIndex, setActiveIndex ] = useState<number>(0)
    const [ ansChoiceArr, setAnsChoice ] = useState<Array<number | null>>(
        new Array(questions.length).fill(null)
    )

    // Classes
    const wrapperClasses = `animate-[fadeIn_1s_1s_forwards] xl:w-273 lg:w-230 min-h-full bg-black/20 opacity-0 \
        rounded-3xl mt-8 ${handleBgColor(correctArr, activeIndex)} \
        p-[2px] backdrop-blur-[100px] \
        text-white`
    const containerClasses = "mx-18.5 pt-15 flex justify-between h-full gap-10"
    const questionsClasses = "flex flex-col gap-200 size-full flex-1"

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>
                <div className={questionsClasses}>
                    <Question 
                        question={questions[activeIndex]}
                        setActiveIndex={setActiveIndex} 
                        index={activeIndex} 
                        maxIndex={questions.length-1}
                        ansChoiceArr={ansChoiceArr}
                        setAnsChoice={setAnsChoice}
                        correctArr={correctArr}
                        setCorrectArr={setCorrectArr}
                    />
                </div>

                <Circles>
                    {questions.map((_, key) => 
                        <Circles.Circle 
                            index={key} 
                            activeIndex={activeIndex} 
                            setActiveIndex={setActiveIndex}
                            ansChoice={ansChoiceArr[key]}
                            correctArr={correctArr}
                            key={key} 
                        />
                    )}
                </Circles>
            </div>
        </section>
    )
}