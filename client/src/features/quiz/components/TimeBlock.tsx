import type { CommonClassesProps } from "../utils/CommonClassesProps"
import timerIcon from "../assets/timerIcon.png"
import { useState } from "react";

type TimeBtnType = {
    type: string;
    className: string;
    placeholder: string;
}


export default function TimeBlock({ commonClasses }: CommonClassesProps) {

    // States
    const [isEnabled, setIsEnabled] = useState<boolean>(true)

    // Attributes
    const timerAlt = "TimeIcon"

    // Classes
    const wrapperClasses = `${!isEnabled && "opacity-50"}`
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

    const timeInputs: Array<TimeBtnType> = [
        { type: "number", className, placeholder: "Hours" },
        { type: "number", className, placeholder: "Mins" },
        { type: "number", className, placeholder: "Secs" },
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
                        checked={isEnabled} 
                        onChange={() => setIsEnabled(!isEnabled)}
                    />
                </div>

                <div className={btnsClasses}>
                    {timeInputs.map(timeInput => 
                        <input 
                            type={timeInput.type}
                            className={timeInput.className}
                            placeholder={timeInput.placeholder} 
                        />
                    )}
                </div>
            </div>
        </div>
    )
}