import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";
import { videoUpload } from "../utils/videoUpload";


type FileInputByDragProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MAX_SIZE_MB: number = 1024
const ALLOWED_TYPES: string[] = ["video/mp4"]

export default function FileInputByDrag({ isLoading, setIsLoading }: FileInputByDragProps) {

    // Other hooks
    const [, setErrorText] = useContext(ErrorMessageContext)
    const navigate = useNavigate()

    // States
    const [isDragged, setIsDragged] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)

    // Validate a file
    const validate = (f: File) => {
        if (!ALLOWED_TYPES.includes(f.type)) {
            throw new Error("Unsupported file type. Please select an MP4 video.")
        }
        const sizeMb = f.size / (1024 * 1024)
        if (sizeMb > MAX_SIZE_MB) {
            throw new Error(`File too large. Limit is ${MAX_SIZE_MB} MB.`)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (!isLoading) setIsDragged(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
        if (isLoading) return

        const droppedFile: File = e.dataTransfer.files[0]
        if (!droppedFile) return

        setFile(droppedFile)
    }

    // Upload when a file is dropped
    useEffect(() => {
        if (!file) return

        (async () => {
            try {
                validate(file)
                setIsLoading(true);

                const formData: FormData = new FormData()
                formData.append("file", file)

                await videoUpload(formData, isLoading, setErrorText, navigate)
                setIsLoading(false);
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Upload failed."
                setErrorText(msg)
            } finally {
                setIsLoading(false)
            }
        })

        return () => {}
    }, [file, isLoading])

    // Classes
    const wrapperClasses = `absolute w-3/4 h-3/4 bg-white/20 rounded-4xl \
        top-0 bottom-0 left-0 right-0 m-auto justify-center items-center z-1 \
        border-5 border-dashed border-white/30 transition ${!isDragged && "opacity-0"} \
        hidden md:flex`
    const spanClasses = "text-white font-bold tracking-wider text-3xl"

    return (
        <div 
            className={wrapperClasses}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <span className={spanClasses}>Drop a video within the field.</span>
        </div>
    )
}