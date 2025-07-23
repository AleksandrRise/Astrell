export default function HintBlock() {

    const wrapperClasses = "absolute shadow-[0_0_50px_0_#003B6E] w-125 top-20 right-19 \
    hint-bg hint-rounded text-white hint-animation"
    const innerWrapperClasses = "px-8 py-13.75 shadow-[0_0_0_1px_#007CE8] hint-rounded"
    const spanClasses = "text-base text-white/50"
    const pClasses = "text-xl pt-3"

    return (
        <div className={wrapperClasses}>
            <div className={innerWrapperClasses}>
                <span className={spanClasses}>How to Start Working With the AI?</span>
                <p className={pClasses}>
                    Drag a video file (lecture) downloaded on your 
                    computer to the center of the page.
                </p>
            </div>
        </div>
    )
}