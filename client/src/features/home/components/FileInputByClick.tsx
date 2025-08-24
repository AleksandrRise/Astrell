import { useNavigate } from "react-router-dom";
import { videoUpload } from "../utils/videoUpload"
import imgSrc from "/assets/aithinkingball.png"
import { useContext } from "react";
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";

type FileInputByClickProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FileInputByClick({ isLoading, setIsLoading }: FileInputByClickProps) {

    // Other Hooks
    const [, setErrorText] = useContext(ErrorMessageContext)
    const navigate = useNavigate()

    // Handles file submission
    const sendFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files) return;
        
        setIsLoading(true)

        const fileToSend: File = e.currentTarget.files[0]
        e.currentTarget.value = ""
        const formData: FormData = new FormData()
        formData.append("file", fileToSend)

        await videoUpload(formData, isLoading, setErrorText, navigate)
        
        setIsLoading(false);
    }

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

            <input 
                className={inputClasses} 
                type={inputType} 
                id={inputId} 
                accept={acceptSettings}
                onChange={(e) => sendFile(e)}
            />
        </>
    )
}