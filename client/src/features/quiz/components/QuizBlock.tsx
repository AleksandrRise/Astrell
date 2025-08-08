import DifficultyBlock from "./DifficultyBlock"
import QuestionsNumBlock from "./QuestionsNumBlock"
import TimeBlock from "./TimeBlock"
import arrowIcon from "../assets/arrow.png"

export default function QuizBlock() {

    // Attributes
    const arrowIconAlt = "GoBack"
    
    // Classes
    const wrapperClasses = "text-white rounded-[40px] bg-white/8 size-fit \
        backdrop-blur-[100px] shadow-[0_0_2px_0_rgba(0,149,255,75)_inset]"
    const containerClasses = "p-11.5"
    const titleClasses = "flex gap-11.5 items-center"
    const titleTextClasses = "font-lato font-bold text-2xl"
    const btnBackClasses = "bg-white/20 rounded-full size-10 cursor-pointer \
        flex justify-center items-center"
    const iconBackClasses = "size-4.5"
    const descClasses = "text-base text-white/70 py-8.25 inline-block"

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>
                <div className={titleClasses}>
                    <button className={btnBackClasses}>
                        <img className={iconBackClasses} src={arrowIcon} alt={arrowIconAlt} />
                    </button>
                    <h1 className={titleTextClasses}>Quiz Settings</h1>
                </div>

                <span className={descClasses}>Choose your quiz preferences.</span>

                <TimeBlock />

                <DifficultyBlock />

                <QuestionsNumBlock />

                <button>Start</button>
            </div>
        </section>
    )
}