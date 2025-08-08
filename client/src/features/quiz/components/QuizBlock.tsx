import DifficultyBlock from "./DifficultyBlock"
import QuestionsNumBlock from "./QuestionsNumBlock"
import TimeBlock from "./TimeBlock"

export default function QuizBlock() {
    
    // Classes
    const wrapperClasses = ""
    const containerClasses = ""
    const titleClasses = ""
    const descClasses = ""

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>
                <div className={titleClasses}>
                    <button></button>
                    <h1>Quiz Settings</h1>
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