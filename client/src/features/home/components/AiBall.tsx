import Text from "./Text.tsx"
import FileInputByDrag from "./FileInputByDrag.tsx";
import FileInputByClick from "./FileInputByClick.tsx";

type AiBallType = {
    children: React.ReactNode;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AiBall({ children, isLoading, setIsLoading }: AiBallType) {

    // Classes
    const sectionClasses = "m-auto"

    return (
        <section className={sectionClasses}>
            {!isLoading && 
                <FileInputByDrag 
                    isLoading={isLoading} 
                    setIsLoading={setIsLoading} 
                />
            }

            <FileInputByClick />

            {children}
        </section>
    )
}

AiBall.Text = Text