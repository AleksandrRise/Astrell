import imgSrc from "../assets/aithinkingball.png"

export default function AiBall() {
    const imgAlt = "AI Thinking Ball"
    const imgClasses = "m-auto mt-40 aiball-animation"

    return (
        <img className={imgClasses} width="350px" height="350px" src={imgSrc} alt={imgAlt} />
    )
}