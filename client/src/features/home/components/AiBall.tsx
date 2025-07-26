import imgSrc from "../assets/aithinkingball.png"
import FileInput from "./FileInput";
import Text from "./Text"

type AiBallType = {
    children: React.ReactNode; 
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AiBall({ children, setErrorText, setIsLoading }: AiBallType) {
    const imgAlt = "AI Thinking Ball"
    const figClasses = "zoomIn"
    const imgClasses = "aiball-animation"
    const sectionClasses = "m-auto"

    return (
        <section className={sectionClasses}>
            <FileInput setErrorText={setErrorText} setIsLoading={setIsLoading} />

            <figure className={figClasses}>
                <img className={imgClasses} width="450px" height="450px" src={imgSrc} alt={imgAlt} />
            </figure>

            {children}
        </section>
    )
}

AiBall.Text = Text