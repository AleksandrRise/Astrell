import { useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuizWrapper from "../features/quiz/components/QuizWrapper"


export default function QuizPage() {

    // States
    const [ totalTime, setTotalTime ] = useState<number>(0)
    const [ hasTimer, setHasTimer ] = useState<boolean>(true)
    const [ hasStarted, setHasStarted ] = useState<boolean>(false)

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
                            <QuizWrapper.QuestionBlock />
                        </QuizWrapper>

                    : <QuizBlock 
                        setHasStarted={setHasStarted} 
                        setTotalTime={setTotalTime} 
                        hasTimer={hasTimer}
                        setHasTimer={setHasTimer}
                    />
                }
            </div>
        </main>
    )
}