import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";

type FileInputProps = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FileInput({setIsLoading }: FileInputProps) {

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

    useEffect(() => {
        if (!file) return

        const upload = async () => {
            setIsLoading(true);

            const formData: FormData = new FormData()
            formData.append("file", file)
            const videoUrl: string = URL.createObjectURL(file)

            await axios.post('http://127.0.0.1:5000/api/v1/uploadVideo', formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            })
                .then(res => {
                    localStorage.setItem("video", videoUrl)
                    navigate("/dashboard", { state: res.data['text']})
                })
                .catch(error => setErrorText(error['message'] || "Upload failed"))
                .finally(() => setIsLoading(false))
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