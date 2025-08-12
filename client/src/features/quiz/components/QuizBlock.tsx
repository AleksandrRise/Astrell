import { useState } from "react";
import Settings from "./Settings"
import StartBtn from "./StartBtn"
import Title from "./Title"
import type { QuestionsType } from "../utils/QuestionsType";

type QuizBlockProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
    hasTimer: boolean;
    setHasTimer: React.Dispatch<React.SetStateAction<boolean>>;
    setQuestions: React.Dispatch<React.SetStateAction<QuestionsType>>;
}

export default function QuizBlock({ setHasStarted, setTotalTime, hasTimer, setHasTimer, setQuestions }: QuizBlockProps) {

    // States
    const [ difficulty, setDifficulty ] = useState<string>("Easy")
    const [ questionsNum, setQuestionsNum ] = useState<number>(1)


    // Classes
    const wrapperClasses = "text-white rounded-[40px] bg-white/8 size-fit \
        backdrop-blur-[100px] shadow-[0_0_2px_0_rgba(0,149,255,75)_inset] \
        max-w-146 max-h-130 flex justify-center items-center"
    const containerClasses = "p-11.5 size-full"
    const descClasses = "text-base text-white/70 py-8.25 inline-block tracking-wide"
    const commonClasses = "w-full h-full bg-white/20 rounded-xl"

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>

                <Title />

                <span className={descClasses}>Choose your quiz preferences.</span>

                <Settings>
                    <Settings.TimeBlock 
                        commonClasses={commonClasses} 
                        setTotalTime={setTotalTime} 
                        hasTimer={hasTimer}
                        setHasTimer={setHasTimer}
                    />
                    <Settings.DifficultyBlock commonClasses={commonClasses} setDifficulty={setDifficulty} />
                    <Settings.QuestionsNumBlock commonClasses={commonClasses} setQuestionsNum={setQuestionsNum} />
                </Settings>

                <StartBtn setHasStarted={setHasStarted} difficulty={difficulty} questionsNum={questionsNum} setQuestions={setQuestions}/>
            </div>
        </section>
    )
}