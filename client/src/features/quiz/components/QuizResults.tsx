export default function QuizResults() {

    // Classes
    const coverClasses = "bg-black/20 z-1 absolute top-0 left-0 size-full flex justify-center items-center text-white"
    const wrapperClasses = ""
    const containerClasses = ""

    return (
        <div className={coverClasses}>
            <section className={wrapperClasses}>
                <div className={containerClasses}>
                    <h3>Great job!</h3>

                    <span>You got 8/10</span>
                    <button>Return</button>
                </div>
            </section>
        </div>
    )
}