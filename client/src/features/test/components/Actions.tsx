import QuizIcon from "../assets/QuizIcon.png"
import FlashIcon from "../assets/FlashIcon.png"
import AIIcon from "../assets/AIIcon.png"

export default function Actions() {

    // Properties
    const htmlFor = "askai"

    // Classes
    const wrapperClasses = "h-full w-full grid grid-cols-2 grid-rows-2 gap-5.25 \
        row-start-2"
    const btnClasses = "rounded-3xl logoGradient-bg p-[2px]"
    const labelClasses = "logoGradient-bg p-[5px] w-full rounded-3xl col-span-2"
    const quizSubtextClasses = ""
    const quizIconClasses = ""
    const quizIconAlt = "QuizIcon"
    const quizTextClasses = ""
    const flashIconClasses = ""
    const flashIconAlt = "FlashcardsIcon"
    const flashTextClasses = ""
    const flashSubtextClasses = ""
    const aiSubtextClasses = ""
    const aiTextClasses = ""
    const aiInputWrapperClasses = ""
    const aiInputClasses = ""
    const aiIconClasses = ""
    const aiIconAlt = "AIIcon"

    return (
        <section className={wrapperClasses}>
            <button className={btnClasses}>
                <span className={quizSubtextClasses}>Make a</span>
                <img className={quizIconClasses} src={QuizIcon} alt={quizIconAlt} />
                <span className={quizTextClasses}>Quiz</span>
            </button>

            <button className={btnClasses}>
                <img className={flashIconClasses} src={FlashIcon} alt={flashIconAlt} />
                <span className={flashTextClasses}>Flashcards</span>
                <span className={flashSubtextClasses}>Make</span>
            </button>

            <label className={labelClasses} htmlFor={htmlFor}>
                <span className={aiSubtextClasses}>Ask</span>
                <span className={aiTextClasses}>AI</span>
                <div className={aiInputWrapperClasses}>
                    <input className={aiInputClasses} type="text" name={htmlFor} id={htmlFor} />
                    <img className={aiIconClasses} src={AIIcon} alt={aiIconAlt} />
                </div>
            </label>
        </section>
    )
}