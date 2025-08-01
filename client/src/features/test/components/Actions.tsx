export default function Actions() {

    // Properties
    const htmlFor = "askai"

    // Classes
    const wrapperClasses = "outline-solid h-full w-full grid grid-cols-2 grid-rows-2 gap-5.25 \
        row-start-2"
    const btnClasses = "rounded-3xl outline-solid p-9.5"
    const labelClasses = "outline-solid rounded-3xl col-span-2"

    return (
        <section className={wrapperClasses}>
            <button className={btnClasses}>
                <span>Make a</span>
                <img src="" alt="" />
                <span>Quiz</span>
            </button>

            <button className={btnClasses}>
                <img src="" alt="" />
                <span>Flashcards</span>
                <span>Make</span>
            </button>

            <label className={labelClasses} htmlFor={htmlFor}>
                <span>Ask</span>
                <span>AI</span>
                <div>
                    <input type="text" name={htmlFor} id={htmlFor} />
                    <img src="" alt="" />
                </div>
            </label>
        </section>
    )
}