import Settings from "./Settings"
import StartBtn from "./StartBtn"
import Title from "./Title"

export default function QuizBlock() {

    
    // Classes
    const wrapperClasses = "text-white rounded-[40px] bg-white/8 size-fit \
        backdrop-blur-[100px] shadow-[0_0_2px_0_rgba(0,149,255,75)_inset]"
    const containerClasses = "p-11.5"
    const descClasses = "text-base text-white/70 py-8.25 inline-block tracking-wide"
    const commonClasses = "w-57.5 h-25 bg-white/20 rounded-xl"

    return (
        <section className={wrapperClasses}>
            <div className={containerClasses}>

                <Title />

                <span className={descClasses}>Choose your quiz preferences.</span>

                <Settings>
                    <Settings.TimeBlock commonClasses={commonClasses} />
                    <Settings.DifficultyBlock commonClasses={commonClasses} />
                    <Settings.QuestionsNumBlock commonClasses={commonClasses} />
                </Settings>

                <StartBtn />
            </div>
        </section>
    )
}