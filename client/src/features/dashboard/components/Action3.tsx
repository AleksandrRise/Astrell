import AIIcon from "../assets/AIIcon.png"


export default function Action3() {

    // Properties
    const htmlFor = "askai"

    // Classes
    const aiClasses = "logoGradient-bg p-[5px] rounded-3xl col-span-2 \
        flex justify-center items-center opacity-40"
    const aiContainerClasses = "flex items-end gap-5.5"
    const aiTextClasses = "text-5xl bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white font-bold italic tracking-wider"
    const aiSubtextClasses = "text-sm italic -mb-1"
    const aiTextWrapperClasses = "relative flex flex-col"
    const aiInputWrapperClasses = "relative w-70"
    const aiInputClasses = "border border-[#333533] rounded-lg bg-white/5 outline-none \
        p-2 pr-13 w-full focus:shadow-[0_0_0_2px_#FFFFFF]/20 transition \
        text-white/80 text-md"
    const aiIconClasses = "size-7 absolute bottom-1.5 right-2.5 cursor-pointer \
        hover:scale-105 hover:animate-wiggle transition"
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
                    <input disabled={true} className={aiInputClasses} type="text" name={htmlFor} id={htmlFor} />
                </div>
            </div>
        </label>
    )
}