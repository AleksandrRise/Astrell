import { useNavigate } from "react-router-dom";
import { videoUpload } from "../utils/videoUpload"
import imgSrc from "/assets/aithinkingball.png"
import { useCallback, useContext, useRef } from "react";
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";

type FileInputByClickProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MAX_SIZE_MB: number = 1024
const ALLOWED_TYPES: string[] = ["video/mp4"]

export default function FileInputByClick({ isLoading, setIsLoading }: FileInputByClickProps) {

    // Other Hooks
    const [, setErrorText] = useContext(ErrorMessageContext)
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const validate = (file: File) => {
        if (!ALLOWED_TYPES.includes(file.type)) {
            throw new Error("Unsupported file type. Please select an MP4 video.")
        }
        const sizeMb = file.size / (1024 * 1024)
        if (sizeMb > MAX_SIZE_MB) {
            throw new Error(`File too large. Limit is ${MAX_SIZE_MB} MB.`)
        }
    }

    // Resets file input
    const resetInput = () => {
        if (inputRef.current) inputRef.current.value = ""
    }

    // Handles file submission
    const sendFile = useCallback(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.currentTarget.files?.[0]
            if (!file || isLoading) return;

            try {
                validate(file)
                setIsLoading(true)

                const formData: FormData = new FormData()
                formData.append("file", file)

                await videoUpload(formData, isLoading, setErrorText, navigate)
            } catch (err) {
                const msg = err instanceof Error ? "err.message" : "Upload failed."
                setErrorText(msg)
            } finally {
                resetInput()
                setIsLoading(false)
            }
        }, 
        [isLoading, navigate, setErrorText, setIsLoading]
    )

    // Attributes
    const inputType = "file"
    const inputId = "fileInputByClick"
    const imgSize = "450px"
    const imgAlt = "AI Thinking Ball"

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
                ref={inputRef}
                className={inputClasses} 
                type={inputType} 
                id={inputId} 
                accept={ALLOWED_TYPES.join(",")}
                onChange={sendFile}
            />
        </>
    )
}