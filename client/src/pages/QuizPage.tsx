import QuizBlock from "../features/quiz/components/QuizBlock"


export default function QuizPage() {

    const mainClasses = "hero-bg w-full h-screen"

    return (
        <main className={mainClasses}>
            <QuizBlock />
        </main>
    )
}