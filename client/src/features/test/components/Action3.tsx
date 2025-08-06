import AIIcon from "../assets/AIIcon.png"


export default function Action3() {

    // Properties
    const htmlFor = "askai"

    // Classes
    const aiClasses = "logoGradient-bg p-[5px] rounded-3xl col-span-2 \
        flex justify-center items-center cursor-text"
    const aiContainerClasses = "flex items-end gap-5.5"
    const aiTextClasses = "text-4xl bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white"
    const aiSubtextClasses = "text-sm italic"
    const aiTextWrapperClasses = "relative flex flex-col"
    const aiInputWrapperClasses = "relative w-70"
    const aiInputClasses = "border border-[#333533] rounded-lg bg-white/5 outline-none \
        p-2 w-full"
    const aiIconClasses = "size-7 absolute bottom-1.5 right-2.5 cursor-pointer"
    const aiIconAlt = "AiIcon"

    return (
        <label className={aiClasses} htmlFor={htmlFor}>
            <div className={aiContainerClasses}>
                <div className={aiTextWrapperClasses}>
                    <span className={aiSubtextClasses}>Ask</span>
                    <span className={aiTextClasses}>AI</span>
                </div>
                <div className={aiInputWrapperClasses}>
                    <img className={aiIconClasses} src={AIIcon} alt={aiIconAlt} />
                    <input className={aiInputClasses} type="text" name={htmlFor} id={htmlFor} />
                </div>
            </div>
        </label>
    )
}