import Settings from "./Settings"
import StartBtn from "./StartBtn"
import Title from "./Title"

type QuizBlockProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuizBlock({ setHasStarted, setTotalTime }: QuizBlockProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
    }

    
    // Classes
    const wrapperClasses = "text-white rounded-[40px] bg-white/8 size-fit \
        backdrop-blur-[100px] shadow-[0_0_2px_0_rgba(0,149,255,75)_inset] \
        max-w-146 max-h-130 flex justify-center items-center"
    const containerClasses = "p-11.5 size-full"
    const descClasses = "text-base text-white/70 py-8.25 inline-block tracking-wide"
    const commonClasses = "w-full h-full bg-white/20 rounded-xl"

    return (
        <section className={wrapperClasses}>
            <form className={containerClasses} onSubmit={handleSubmit}>

                <Title />

                <span className={descClasses}>Choose your quiz preferences.</span>

                <Settings>
                    <Settings.TimeBlock commonClasses={commonClasses} setTotalTime={setTotalTime} />
                    <Settings.DifficultyBlock commonClasses={commonClasses} />
                    <Settings.QuestionsNumBlock commonClasses={commonClasses} />
                </Settings>

                <StartBtn setHasStarted={setHasStarted} />
            </form>
        </section>
    )
}