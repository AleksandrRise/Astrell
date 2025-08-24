export default function TextLoading() {

    // Classes
    const divClasses = "text-white/70 text-center tracking-wider md:-mt-20 -mt-15"
    const pClasses = "md:text-2xl text-lg fadeIn"

    return (
        <div className={divClasses}>
            <p className={pClasses}>
                Watching...
            </p>
        </div>
    )
}