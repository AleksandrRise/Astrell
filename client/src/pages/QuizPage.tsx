import QuizBlock from "../features/quiz/components/QuizBlock"


export default function QuizPage() {

    const mainClasses = "hero-bg w-full h-screen flex justify-center items-center"

    return (
        <main className={mainClasses}>
            <QuizBlock />
        </main>
    )
}