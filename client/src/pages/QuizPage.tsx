import { useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuestionBlock from "../features/quiz/components/QuestionBlock"


export default function QuizPage() {

    const [ hasStarted, setHasStarted ] = useState<boolean>(false)
    const mainClasses = "hero-bg w-full h-screen"
    const containerClasses = `${hasStarted && "bg-blur"} transition-filter size-full \
        flex justify-center items-center`

    return (
        <main className={mainClasses}>
            <div className={containerClasses}>
                {hasStarted 
                    ? <QuestionBlock /> 
                    : <QuizBlock setHasStarted={setHasStarted} />
                }
            </div>
        </main>
    )
}