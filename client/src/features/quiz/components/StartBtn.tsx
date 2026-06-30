import { useState } from "react";
import axios from "axios";

import type { QuestionsType } from "../utils/QuestionsType";
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE";
import { getTranscript } from "../../../shared/utils/getTranscript";

type StartBtnProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
    difficulty: string;
    questionsNum: number;
    setQuestions: React.Dispatch<React.SetStateAction<QuestionsType>>;
};

export default function StartBtn({
    setHasStarted,
    difficulty,
    questionsNum,
    setQuestions,
}: StartBtnProps) {

    // Classes
    const btnClasses = ["mt-9.25", "w-full", "py-3", "bg-white/20", 
        "font-lato", "text-base", "rounded-xl", "font-semibold", 
        "tracking-wider", "cursor-pointer", "hover:bg-white/30", 
        "transition", "active:scale-98"].join(" ");

    const [isLoading, setIsLoading] = useState(false);

    async function handleStartClick() {
        const transcript = getTranscript();

        setIsLoading(true);

        try {
            const response = await axios.get<QuestionsType>(
                `${APP_BACKEND_BASE}/api/v1/getQuiz`,
                {
                    params: {
                        difficulty,
                        questionsNum,
                        transcript,
                    },
                }
            );

            setQuestions(response.data);
            setHasStarted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            type="button"
            className={btnClasses}
            onClick={handleStartClick}
            disabled={isLoading}
        >
            {isLoading ? "Starting..." : "Start!"}
        </button>
    );
}