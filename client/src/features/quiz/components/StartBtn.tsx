import axios from "axios"
import { useState } from "react";
import type { QuestionsType } from "../utils/QuestionsType";


type StartBtnProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
    difficulty: string;
    questionsNum: number;
    setQuestions: React.Dispatch<React.SetStateAction<QuestionsType>>;
}

export default function StartBtn({ setHasStarted, difficulty, questionsNum, setQuestions }: StartBtnProps) {

    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const handleClick = () => {
        setIsLoading(true)

        

        setHasStarted(true)
        setIsLoading(false)
    }

    // Classes
    const btnClasses = `mt-9.25 w-full py-3 bg-white/20 font-lato text-base \
        rounded-xl font-semibold tracking-wider cursor-pointer hover:bg-white/30 \
        transition active:scale-98 ${isLoading && "opacity-70"}`

    return (
        <button className={btnClasses} onClick={() => handleClick} disabled={isLoading}>Start!</button>
    )
}