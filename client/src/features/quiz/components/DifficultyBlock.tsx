import type { CommonClassesProps } from "../utils/CommonClassesProps"
import chartIcon from "../assets/chartIcon.png"

type OptionsType = {
    value: string;
    text: string;
}

export default function DifficultyBlock({ commonClasses }: CommonClassesProps) {

    const options: Array<OptionsType> = [
        { value: "easy", text: "Easy" },
        { value: "medium", text: "Medium" },
        { value: "hard", text: "Hard" },
    ]

    // Attributes
    const selectName = "Difficulty"
    const chartAlt = "ChartIcon"

    // Classes
    const wrapperClasses = ""
    const containerClasses = "m-4.5 flex flex-col gap-3"
    const topClasses = "w-full flex items-center gap-2"
    const iconClasses = "size-5"
    const textClasses = "text-md text-white/90 tracking-wide"
    const selectClasses = "ml-2.5 w-3/4 outline-none bg-white text-black/80 \
        rounded-md text-xs py-1 pl-2.25 border-r-6 border-r-transparent \
        outline-solid outline-1 outline-white/70"

    return (
        <div className={`${commonClasses} ${wrapperClasses}`}>
            <div className={containerClasses}>
                <div className={topClasses}>
                    <img className={iconClasses} src={chartIcon} alt={chartAlt} />
                    <span className={textClasses}>Difficulty</span>
                </div>

                <select className={selectClasses} name={selectName}>
                    {options.map(option => 
                        <option value={option.value}>{option.text}</option>
                    )}
                </select>
            </div>
        </div>
    )
}