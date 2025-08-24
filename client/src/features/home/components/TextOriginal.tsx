import useWindowDimensions from "../../../shared/utils/useWindowDimensions"

export default function TextOriginal() {

    // Determines a subtext in relation to screen's resolution
    const determineText = (): React.ReactElement => {
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
    const divClasses = "text-white text-center tracking-wider -mt-10 md:-mt-20"
    const hClasses = "text-white/80 md:text-base text-sm fadeIn"
    const spanClasses = "text-white"
    const pClasses = "md:text-2xl text-md font-bold md:mt-5 mt-3 fadeIn"
    const subTextClasses = "md:text-md text-xs text-white/50 fadeIn md:mt-5 mt-1"

    return (
        <div className={divClasses}>
            <h3 className={hClasses}>Hi there! I am <span className={spanClasses}>Astrell.</span></h3>
            {determineText()}
            <p className={subTextClasses}>Currently, limited to 1-2 minutes.</p>
        </div>
    )
}