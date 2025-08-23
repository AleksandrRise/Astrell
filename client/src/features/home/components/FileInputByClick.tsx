import imgSrc from "/assets/aithinkingball.png"

export default function FileInputByClick() {

    // Classes
    const imgAlt = "AI Thinking Ball"
    const figClasses = "zoomIn"
    const imgClasses = "aiball-animation"

    return (
        <figure className={figClasses}>
            <img className={imgClasses} width="450px" height="450px" src={imgSrc} alt={imgAlt} />
        </figure>
    )
}