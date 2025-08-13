import { useEffect, useState } from "react";
import Timer from "./Timer"

type TimerBlock = {
    duration: number;
    setHasEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TimerBlock({ duration, setHasEnded }: TimerBlock) {

    // States
    const [ time, setTime ] = useState<number>(duration)
    const [ borderColor, setBorderColor ] = useState<string>("border-white/20")

    // Color Handling (300000 = 5 minutes; 60000 = 1 minute)
    useEffect(() => {
        if (time <= 300000 && time > 60000) {
            setBorderColor("border-warning/50")
        } else if (time <= 60000) {
            setBorderColor("border-error/50")
        }
    }, [time])


    // Classes
    const wrapperClasses = `w-82 min-h-19 bg-black border-1 ${borderColor} rounded-3xl \
        mt-6.5 animate-[fadeIn_1s_1s_forwards] opacity-0 flex justify-center items-center \
        text-2xl`

    return (
        <section className={wrapperClasses}>
            <Timer time={time} setTime={setTime} setHasEnded={setHasEnded} />
        </section>
    )
}