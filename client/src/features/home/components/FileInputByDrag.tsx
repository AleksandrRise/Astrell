import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";
import { videoUpload } from "../utils/videoUpload";


type FileInputByDragProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FileInputByDrag({ isLoading, setIsLoading }: FileInputByDragProps) {

    // Other hooks
    const [, setErrorText] = useContext(ErrorMessageContext)
    const navigate = useNavigate()

    // States
    const [isDragged, setIsDragged] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)

    // Functions
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)

        const droppedFile: File = e.dataTransfer.files[0]
        if (!droppedFile) return

        setFile(droppedFile)
    }

    // Sending Dragged File to Python
    useEffect(() => {
        if (!file) return

        const upload = async () => {
            setIsLoading(true);

            const formData: FormData = new FormData()
            formData.append("file", file)

            await videoUpload(formData, isLoading, setErrorText, navigate)
            setIsLoading(false);
        }

        upload()
    }, [file])

    // Classes
    const wrapperClasses = `absolute w-3/4 h-3/4 bg-white/20 rounded-4xl \
        top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center z-1 \
        border-5 border-dashed border-white/30 transition ${!isDragged && "opacity-0"}`
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