import imgSrc from "/assets/aithinkingball.png"

export default function FileInputByClick() {

    // Attributes
    const inputType = "file"
    const inputId = "fileInputByClick"
    const imgSize = "450px"
    const imgAlt = "AI Thinking Ball"
    const acceptSettings = "video/mp4"

    // Classes
    const labelClasses = "size-fit md:pointer-events-none"
    const figClasses = "zoomIn size-90 md:size-auto"
    const imgClasses = "aiball-animation"
    const inputClasses = "hidden"

    return (
        <>
            <label className={labelClasses} htmlFor={inputId}>
                <figure className={figClasses}>
                    <img className={imgClasses} 
                        width={imgSize} 
                        height={imgSize} 
                        src={imgSrc} 
                        alt={imgAlt} 
                    />
                </figure>
            </label>

            <input className={inputClasses} type={inputType} id={inputId} accept={acceptSettings}/>
        </>
    )
}