import QuizIcon from "../assets/QuizIcon.png"
import FlashIcon from "../assets/FlashIcon.png"
import AIIcon from "../assets/AIIcon.png"

export default function Actions() {

    // Properties
    const htmlFor = "askai"

    // Classes
    const wrapperClasses = "size-full grid grid-cols-2 grid-rows-2 gap-5.25 \
        row-start-2 font-lato"
    const btnClasses = "rounded-3xl logoGradient-bg p-[2px] flex flex-col text-start \
        justify-center items-center cursor-pointer"
    const quizContainerClasses = ""
    const quizTextClasses = "text-4xl font-bold bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white"
    const quizSubtextClasses = "text-lg font-semibold italic"
    const quizHolderClasses = "flex items-center gap-1 mt-1"
    const quizIconClasses = "size-7"
    const quizIconAlt = "QuizIcon"
    const flashContainerClasses = "flex flex-col"
    const flashIconClasses = "size-7"
    const flashIconAlt = "FlashcardsIcon"
    const flashTextClasses = "text-2xl font-bold bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white"
    const flashSubtextClasses = "text-sm italic ml-auto font-semibold"
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
        <section className={wrapperClasses}>
            <button className={btnClasses}>
                <div className={quizContainerClasses}>
                    <span className={quizSubtextClasses}>Make a</span>
                    <div className={quizHolderClasses}>
                        <img className={quizIconClasses} src={QuizIcon} alt={quizIconAlt} />
                        <span className={quizTextClasses}>Quiz</span>
                    </div>
                </div>
            </button>

            <button className={btnClasses}>
                <div className={flashContainerClasses}>
                    <img className={flashIconClasses} src={FlashIcon} alt={flashIconAlt} />
                    <span className={flashTextClasses}>Flashcards</span>
                    <span className={flashSubtextClasses}>Make</span>
                </div>
            </button>

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
        </section>
    )
}