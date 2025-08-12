import { useEffect, useState } from "react"

type TimerProps = {
    duration: number;
}

export default function Timer({ duration }: TimerProps) {

    const [ time, setTime ] = useState<number>(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    const getFormattedTime = (millis: number) => {
        let total_sec: number = Math.floor(millis / 1000)
        let total_min: number = Math.floor(total_sec / 60)
        let total_hours: number = Math.floor(total_min / 60)

        let seconds: number = total_sec % 60
        let minutes: number = total_min % 60
        let hours: number = total_hours % 24 

        return `${hours}:${minutes}:${seconds}`
    }

    // Classes
    const textClasses = "font-lato text-white tracking-widest"

    return (
        <span className={textClasses}>{getFormattedTime(time)}</span>
    )
}