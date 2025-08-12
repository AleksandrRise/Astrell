import type { CommonClassesProps } from "../utils/CommonClassesProps"
import timerIcon from "../assets/timerIcon.png"
import { useEffect, useState } from "react";

type TimeBtnType = {
    type: string;
    className: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
interface TimeBlockProps extends CommonClassesProps {
    hasTimer: boolean;
    setHasTimer: React.Dispatch<React.SetStateAction<boolean>>;
    setTotalTime?: React.Dispatch<React.SetStateAction<number>>;
}


export default function TimeBlock({ commonClasses, setTotalTime, hasTimer, setHasTimer }: TimeBlockProps) {

    // States
    const [ h, setHours ] = useState<number>(0)
    const [ m, setMinutes ] = useState<number>(0)
    const [ s, setSeconds ] = useState<number>(0)

    // Time Handling
    useEffect(() => {
        if (setTotalTime !== undefined) {
            const calculatedTime: number = (h * 3600 + m * 60 + s) * 1000
            console.log(calculatedTime)
            setTotalTime(calculatedTime)
        }
    }, [h, m, s])

    const changeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHours(Number(e.target.value || 0))
    }
    const changeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(Number(e.target.value || 0))
    }
    const changeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeconds(Number(e.target.value || 0))
    }

    // Attributes
    const timerAlt = "TimeIcon"

    // Classes
    const wrapperClasses = `${!hasTimer && "opacity-50"}`
    const containerClasses = "m-4.5 flex flex-col gap-3"
    const topClasses = "flex items-center"
    const btnsClasses = "grid grid-cols-3 gap-x-1.5"
    const iconClasses = "size-5"
    const textClasses = "text-md text-white/90 ml-1.75 mr-auto tracking-wide"
    const checkClasses = "size-3.5"
    const className = "text-center bg-white border-1 border-black/20 rounded-md \
        text-black/80 placeholder:text-black/80 text-xs py-1 px-3 tracking-wide \
        outline-none focus:placeholder:text-transparent [appearance:textfield]  \
        [&::-webkit-outer-spin-button]:appearance-none \
        [&::-webkit-inner-spin-button]:appearance-none"

    // Inputs attributes
    const timeInputs: Array<TimeBtnType> = [
        { type: "number", className, placeholder: "Hours", onChange: changeHours },
        { type: "number", className, placeholder: "Mins", onChange: changeMinutes },
        { type: "number", className, placeholder: "Secs", onChange: changeSeconds },
    ]

    return (
        <div className={`${commonClasses} ${wrapperClasses}`}>
            <div className={containerClasses}>
                <div className={topClasses}>
                    <img className={iconClasses} src={timerIcon} alt={timerAlt} />
                    <span className={textClasses}>Total time</span>
                    <input 
                        className={checkClasses} 
                        type="checkbox" 
                        checked={hasTimer} 
                        onChange={() => setHasTimer(!hasTimer)}
                    />
                </div>

                <div className={btnsClasses}>
                    {timeInputs.map((timeInput, index) => 
                        <input 
                            type={timeInput.type}
                            className={timeInput.className}
                            placeholder={timeInput.placeholder}
                            onChange={timeInput.onChange}
                            disabled={!hasTimer}
                            min="0"
                            max="59"
                            key={index}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}