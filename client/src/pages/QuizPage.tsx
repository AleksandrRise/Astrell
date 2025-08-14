import { useEffect, useState } from "react"
import QuizBlock from "../features/quiz/components/QuizBlock"
import QuizWrapper from "../features/quiz/components/QuizWrapper"
import type { QuestionsType } from "../features/quiz/utils/QuestionsType.ts"
import QuizResults from "../features/quiz/components/QuizResults.tsx"


// Default value
const questionsDefault: QuestionsType = {
    questions: [{
        question: "",
        answers: [{
            answer: "",
            correct: false
        }]
    }],
    correctArr: [],
    setCorrectArr: () => {},
} 


export default function QuizPage() {


    // States
    const [ totalTime, setTotalTime ] = useState<number>(0)
    const [ hasTimer, setHasTimer ] = useState<boolean>(true)
    const [ hasStarted, setHasStarted ] = useState<boolean>(false)
    const [ questionsState, setQuestions ] = useState<QuestionsType>(questionsDefault)
    const [ hasEnded, setHasEnded ] = useState<boolean>(false)
    const [ correctArr, setCorrectArr ] = useState<Array<boolean | null>>(
        new Array(questionsState.questions.length).fill(null)
    )

    useEffect(() => {
        setHasEnded(!correctArr.includes(null))
    }, [correctArr])
    useEffect(() => {
        setCorrectArr(new Array(questionsState.questions.length).fill(null))
    }, [questionsState])

    // Classes
    const mainClasses = "hero-bg w-full h-screen"
    const containerClasses = `${hasStarted && "bg-blur"} transition-filter size-full \
        flex justify-center items-center overflow-hidden`

    return (
        <main className={mainClasses}>
            {hasEnded && <QuizResults correctArr={correctArr} setHasEnded={setHasEnded} />}

            <div className={containerClasses}>

                {hasStarted 
                    ? 
                        <QuizWrapper>
                            {(hasTimer && totalTime > 0) 
                                ? <QuizWrapper.TimerBlock duration={totalTime} setHasEnded={setHasEnded} /> 
                                : null}
                            <QuizWrapper.QuestionBlock 
                                questions={questionsState.questions} 
                                correctArr={correctArr}
                                setCorrectArr={setCorrectArr}
                            />
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