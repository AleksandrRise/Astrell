import axios from "axios"
import { useEffect, useState } from "react";
import type { QuestionsType } from "../utils/QuestionsType.ts";
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE.ts";
import { getTranscript } from "../../../shared/utils/getTranscript.ts";


type StartBtnProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
    difficulty: string;
    questionsNum: number;
    setQuestions: React.Dispatch<React.SetStateAction<QuestionsType>>;
}

export default function StartBtn({ setHasStarted, difficulty, questionsNum, setQuestions }: StartBtnProps) {

    // States
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const transcript = getTranscript()

    // Connecting with backend/Receiving questions for a quiz
    useEffect(() => {

        if (isLoading) {
            const fetchData = async () => {
                try {
                    const res = await axios.get<QuestionsType>(
                        `${APP_BACKEND_BASE}/api/v1/getQuiz?difficulty=${difficulty}&questionsNum=${questionsNum}&transcript=${transcript}`
                    ) 

                    setQuestions(res.data)
                    setHasStarted(true)
                } catch (err) {
                    console.error(err)
                } finally {
                    setIsLoading(false)
                }
            } 

            fetchData()
        }
    }, [isLoading])


    // Classes
    const btnClasses = `mt-9.25 w-full py-3 bg-white/20 font-lato text-base \
        rounded-xl font-semibold tracking-wider cursor-pointer hover:bg-white/30 \
        transition active:scale-98 ${isLoading && "opacity-70"}`

    return (
        <button className={btnClasses} onClick={() => setIsLoading(true)} disabled={isLoading}>Start!</button>
    )
}