import { useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuestionBlock from "../features/quiz/components/QuestionBlock"


export default function QuizPage() {

    const [ hasStarted, setHasStarted ] = useState<boolean>(false)
    const mainClasses = `hero-bg w-full h-screen flex justify-center items-center \
        ${hasStarted && "bg-blur"} transition-filter`

    return (
        <main className={mainClasses}>
            {hasStarted 
                ? <QuestionBlock /> 
                : <QuizBlock setHasStarted={setHasStarted} />
            }
        </main>
    )
}