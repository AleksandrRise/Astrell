import Timer from "./Timer"

type TimerBlock = {
    totalTime: number;
}

export default function TimerBlock({ totalTime }: TimerBlock) {


    // Classes
    const wrapperClasses = "w-82 min-h-19 bg-black border-1 border-white/20 rounded-3xl \
        mt-6.5 animate-[fadeIn_1s_1s_forwards] opacity-0 flex justify-center items-center \
        text-2xl"

    return (
        <section className={wrapperClasses}>
            <Timer duration={totalTime} />
        </section>
    )
}