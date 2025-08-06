import QuizIcon from "../assets/QuizIcon.png"

export default function Action1() {

    // Classes
    const btnClasses = "rounded-3xl logoGradient-bg p-[2px] flex flex-col text-start \
        justify-center items-center cursor-pointer"
    const quizContainerClasses = ""
    const quizTextClasses = "text-4xl font-bold bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white"
    const quizSubtextClasses = "text-lg font-semibold italic"
    const quizHolderClasses = "flex items-center gap-1 mt-1"
    const quizIconClasses = "size-7"
    const quizIconAlt = "QuizIcon"

    return (
        <button className={btnClasses}>
            <div className={quizContainerClasses}>
                <span className={quizSubtextClasses}>Make a</span>
                <div className={quizHolderClasses}>
                    <img className={quizIconClasses} src={QuizIcon} alt={quizIconAlt} />
                    <span className={quizTextClasses}>Quiz</span>
                </div>
            </div>
        </button>
    )
}
