export default function QuizResults() {

    // Classes
    const coverClasses = "bg-black/20 z-1 absolute top-0 left-0 size-full flex justify-center items-center \
        fadeInOpacity transition opacity-0"
    const wrapperClasses = "w-145 h-95 rounded-[40px] text-white bg-blackBG \
        backdrop-blur-[100px] shadow-[0_0_2px_0_rgba(0,149,255,75)_inset] \
        fadeIn transition delay-500"
    const containerClasses = "flex flex-col justify-center items-center size-full"
    const titleClasses = "text-5xl font-bold tracking-wide"
    const textClasses = "text-2xl tracking-wide pt-5.75 pb-15.5"
    const btnClasses = "cursor-pointer w-50 h-12.5 bg-white/15 font-bold \
        text-xl rounded-xl logoGradient-bg-3 p-[2px] shadow-[0_0_12px_0_rgba(28,154,214,0.5)] \
        hover:scale-98 active:opacity-80 transition-transform"

    return (
        <div className={coverClasses}>
            <section className={wrapperClasses}>
                <div className={containerClasses}>
                    <h3 className={titleClasses}>Great job!</h3>

                    <span className={textClasses}>Your score is 8/10.</span>
                    <button className={btnClasses}>Return</button>
                </div>
            </section>
        </div>
    )
}