export default function TextOriginal() {

    // Classes
    const divClasses = "text-white text-center tracking-wider -mt-20"
    const hClasses = "text-white/80 text-base fadeIn"
    const spanClasses = "text-white"
    const pClasses = "text-2xl mt-5 fadeIn"

    return (
        <div className={divClasses}>
            <h3 className={hClasses}>Hi there! I am <span className={spanClasses}>Astrell.</span></h3>
            <p className={pClasses}>
                Paste your lecture here, so we<br />
                could work on that together.
            </p>
        </div>
    )
}