import type { CommonClassesProps } from "../utils/CommonClassesProps"
import questionIcon from "../assets/questionIcon.png"


export default function QuestionsNumBlock({ commonClasses }: CommonClassesProps) {

    // Attributes
    const inputType = "number"
    const questionAlt = "QuestionIcon"

    // Classes
    const wrapperClasses = ""
    const containerClasses = "m-4.5 flex flex-col gap-3"
    const topClasses = "w-full flex items-center gap-2"
    const iconClasses = "size-5"
    const textClasses = "text-md text-white/90 tracking-wide"
    const inputClasses = "bg-white border-1 border-black/20 rounded-md \
    text-black/80 placeholder:text-black/30 text-xs py-1 ml-2.5 px-2 w-2/5 tracking-wide \
    outline-none focus:placeholder:text-transparent [appearance:textfield]  \
    [&::-webkit-outer-spin-button]:appearance-none \
    [&::-webkit-inner-spin-button]:appearance-none"


    return (
        <div className={`${commonClasses} ${wrapperClasses}`}>
            <div className={containerClasses}>
                <div className={topClasses}>
                    <img className={iconClasses} src={questionIcon} alt={questionAlt} />
                    <span className={textClasses}>Number of questions</span>
                </div>

                <input className={inputClasses} type={inputType} placeholder="1" />
            </div>
        </div>
    )
}