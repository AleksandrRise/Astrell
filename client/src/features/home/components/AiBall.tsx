import Text from "./Text"
import FileInputByDrag from "./FileInputByDrag";
import FileInputByClick from "./FileInputByClick";

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

            <FileInputByClick
                isLoading={isLoading} 
                setIsLoading={setIsLoading} 
            />

            {children}
        </section>
    )
}

AiBall.Text = Text