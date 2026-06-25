export default function UploadHint() {

    // Classes
    const asideClasses = "absolute shadow-[0_0_50px_0_#003B6E] w-125 top-20 right-19 hint-bg hint-rounded text-white hint-animation";
    const divClasses = "px-8 py-13.75 shadow-[0_0_0_1px_#007CE8] hint-rounded";

    return (
        <aside className={asideClasses}>
            <div className={divClasses}>
                <span className="text-base text-white/50">
                    How to start working with the AI?
                </span>

                <p className="text-xl pt-3">
                    Drag a video file from your computer to the center of the page.
                </p>
            </div>
        </aside>
    );
}