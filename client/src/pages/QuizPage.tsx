import { useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuizWrapper from "../features/quiz/components/QuizWrapper"
import type { QuestionsType } from "../features/quiz/utils/QuestionsType"


// Default value
const questionsDefault: QuestionsType = {
    questions: [{
        question: "",
        answers: [{
            answer: "",
            correct: false
        }]
    }]
} 


export default function QuizPage() {


    // States
    const [ totalTime, setTotalTime ] = useState<number>(0)
    const [ hasTimer, setHasTimer ] = useState<boolean>(true)
    const [ hasStarted, setHasStarted ] = useState<boolean>(false)
    const [ questionsState, setQuestions ] = useState<QuestionsType>(questionsDefault)

    // Classes
    const mainClasses = "hero-bg w-full h-screen"
    const containerClasses = `${hasStarted && "bg-blur"} transition-filter size-full \
        flex justify-center items-center overflow-hidden`

    return (
        <main className={mainClasses}>
            <div className={containerClasses}>
                {hasStarted 
                    ? 
                        <QuizWrapper>
                            {(hasTimer && totalTime > 0) 
                                ? <QuizWrapper.TimerBlock duration={totalTime} /> 
                                : null}
                            <QuizWrapper.QuestionBlock questions={questionsState.questions} />
                        </QuizWrapper>

                    : <QuizBlock 
                        setHasStarted={setHasStarted} 
                        setTotalTime={setTotalTime} 
                        hasTimer={hasTimer}
                        setHasTimer={setHasTimer}
                        setQuestions={setQuestions}
                    />
                }
            </div>
        </main>
    )
}