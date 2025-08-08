export default function Notes() {

    // Classes
    const wrapperClasses = "w-full h-auto row-start-1 rounded-3xl \
        relative flex flex-col items-center logoGradient-bg p-[2px] \
        opacity-40"
    const headerWrapper = "flex items-center justify-center gap-4.25 mt-8 w-full"
    const headerClasses = "font-lato text-2xl font-bold text-nowrap \
        text-shadow-[0_0_16px_rgb(255_255_255_/_0.25)]"
    const textClasses = "absolute bottom-0 top-0 flex items-center text-5xl font-lato font-bold"
    const lineClasses = "relative h-px w-1/4 bg-gradient-to-r from-transparent to-[#575B63] \
        after:content-[''] after:absolute after:bg-[#575B63] after:size-[4px] \
        after:-top-[1.5px] after:-right-1 after:rotate-45"

    return (
        <section className={wrapperClasses}>

            <div className={headerWrapper}>
                <div className={lineClasses} />
                <h2 className={headerClasses}>My Notes</h2>
                <div className={lineClasses + " rotate-180"} />
            </div>

            <span className={textClasses}>N/A</span>

        </section>
    )
}