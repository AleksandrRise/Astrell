import { useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuizWrapper from "../features/quiz/components/QuizWrapper"


export default function QuizPage() {

    // States
    const [ hasStarted, setHasStarted ] = useState<boolean>(false)
    const [ totalTime, setTotalTime ] = useState<number>(0)

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
                            <QuizWrapper.TimerBlock totalTime={totalTime} />
                            <QuizWrapper.QuestionBlock />
                        </QuizWrapper>

                    : <QuizBlock setHasStarted={setHasStarted} setTotalTime={setTotalTime} />
                }
            </div>
        </main>
    )
}