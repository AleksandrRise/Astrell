export default function Notes() {

    // Classes
    const wrapperClasses = "outline-solid w-full h-auto row-start-1 rounded-3xl \
        relative flex flex-col items-center"
    const headerClasses = "font-lato text-2xl font-bold mt-8"
    const textClasses = "my-auto text-5xl font-lato font-bold"

    return (
        <section className={wrapperClasses}>
            <h2 className={headerClasses}>My Notes</h2>
            <span className={textClasses}>N/A</span>
        </section>
    )
}