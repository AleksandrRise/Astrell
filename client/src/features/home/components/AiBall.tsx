import imgSrc from "/assets/aithinkingball.png"
import Text from "./Text.tsx"
import FileInputByDrag from "./FileInputByDrag.tsx";

type AiBallType = {
    children: React.ReactNode;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AiBall({ children, isLoading, setIsLoading }: AiBallType) {

    // Classes
    const imgAlt = "AI Thinking Ball"
    const figClasses = "zoomIn"
    const imgClasses = "aiball-animation"
    const sectionClasses = "m-auto"

    return (
        <section className={sectionClasses}>
            {!isLoading && 
                <FileInputByDrag 
                    isLoading={isLoading} 
                    setIsLoading={setIsLoading} 
                />
            }

            <figure className={figClasses}>
                <img className={imgClasses} width="450px" height="450px" src={imgSrc} alt={imgAlt} />
            </figure>

            {children}
        </section>
    )
}

AiBall.Text = Text