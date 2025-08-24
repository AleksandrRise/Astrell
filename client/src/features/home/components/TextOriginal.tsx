import useWindowDimensions from "../../../shared/utils/useWindowDimensions"

export default function TextOriginal() {

    const determineText = () => {
        if (useWindowDimensions().width <= 768) {
            return <p className={pClasses}>Click on me to choose a file.</p>
        } else {
            return <p className={pClasses}>
                    Paste your lecture here, so we<br />
                    could work on that together.
                </p>
        }
    }

    // Classes
    const divClasses = "text-white text-center tracking-wider -mt-20"
    const hClasses = "text-white/80 lg:text-base text-md fadeIn"
    const spanClasses = "text-white"
    const pClasses = "text-2xl mt-5 fadeIn"
    const subTextClasses = "text-md text-white/50 fadeIn mt-5"

    return (
        <div className={divClasses}>
            <h3 className={hClasses}>Hi there! I am <span className={spanClasses}>Astrell.</span></h3>
            {determineText()}
            <p className={subTextClasses}>Currently, limited to 1-2 minutes.</p>
        </div>
    )
}