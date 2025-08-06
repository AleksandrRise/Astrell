export default function Notes() {

    // Classes
    const wrapperClasses = "w-full h-auto row-start-1 rounded-3xl \
        relative flex flex-col items-center logoGradient-bg p-[2px]"
    const headerClasses = "font-lato text-2xl font-bold mt-8 \
        text-shadow-[0_0_16px_rgb(255_255_255_/_0.25)]"
    const textClasses = "my-auto text-5xl font-lato font-bold"

    return (
        <section className={wrapperClasses}>
            <h2 className={headerClasses}>My Notes</h2>
            <span className={textClasses}>N/A</span>
        </section>
    )
}