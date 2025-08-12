import { useState } from "react";
import Timer from "./Timer"

type TimerBlock = {
    duration: number;
}

export default function TimerBlock({ duration }: TimerBlock) {

    // States
    const [ time, setTime ] = useState<number>(duration)

    // Color Handling (300000 = 5 minutes; 60000 = 1 minute)
    const borderColor = (): string => {
        if (time <= 300000) {
            return "border-warning/20"
        } else if (time <= 60000) {
            return "border-error/20"
        } else {
            return "border-white/20"
        }
    }

    // Classes
    const wrapperClasses = `w-82 min-h-19 bg-black border-1 ${borderColor} rounded-3xl \
        mt-6.5 animate-[fadeIn_1s_1s_forwards] opacity-0 flex justify-center items-center \
        text-2xl transition`

    return (
        <section className={wrapperClasses}>
            <Timer time={time} setTime={setTime} />
        </section>
    )
}