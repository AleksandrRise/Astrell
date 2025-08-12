import Timer from "../utils/Timer"

export default function TimerBlock() {

    const timer = "1:25:57"

    // Classes
    const wrapperClasses = "w-82 min-h-19 bg-black border-1 border-white/20 rounded-3xl \
        mt-6.5 animate-[fadeIn_1s_1s_forwards] opacity-0 flex justify-center items-center \
        text-2xl"

    return (
        <section className={wrapperClasses}>
            <Timer duration={2 * 64 * 60 * 60 * 1000} />
        </section>
    )
}