export default function TextLoading() {

    // Classes
    const divClasses = "text-white/70 text-center tracking-wider -mt-20"
    const pClasses = "text-2xl fadeIn"

    return (
        <div className={divClasses}>
            <p className={pClasses}>
                Watching...
            </p>
        </div>
    )
}