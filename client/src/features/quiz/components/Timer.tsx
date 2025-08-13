import { useEffect } from "react"

type TimerProps = {
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
    setHasEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer({ time, setTime, setHasEnded }: TimerProps) {

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1000)
            }, 1000)
        } else {
            setHasEnded(true)
        }
    }, [time])

    const getFormattedTime = (millis: number) => {
        let total_sec: number = Math.floor(millis / 1000)
        let total_min: number = Math.floor(total_sec / 60)
        let total_hours: number = Math.floor(total_min / 60)

        let seconds: number = total_sec % 60
        let minutes: number = total_min % 60
        let hours: number = total_hours % 24 

        return (hours < 10 ? `0${hours}:` : `${hours}:`)
               +(minutes < 10 ? `0${minutes}:` : `${minutes}:`)
                +(seconds < 10 ? `0${seconds}` : `${seconds}`)
    }

    // Classes
    const textClasses = "font-lato text-white tracking-widest"

    return (
        <span className={textClasses}>{getFormattedTime(time)}</span>
    )
}