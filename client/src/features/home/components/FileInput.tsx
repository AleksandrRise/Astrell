import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

type FileInputProps = {
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FileInput({ setErrorText, setIsLoading }: FileInputProps) {

    // Other hooks
    const navigate = useNavigate()

    // States
    const [isDragged, setIsDragged] = useState<boolean>(false)

    // Functions
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
    }

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
        setIsLoading(true)

        const formData: FormData = new FormData()
        const droppedFile: File = e.dataTransfer.files[0]
        const videoUrl: string = URL.createObjectURL(droppedFile)

        formData.append('file', droppedFile)

        await axios.post('http://127.0.0.1:5000/api/v1/uploadVideo', formData, {
            headers: {
                "Content-Type":"multipart/form-data"
            }
        })
            .then(res => {
                localStorage.setItem("video", videoUrl)
                navigate("/response", { state: [res.data['text']]})
            })
            .catch(error => setErrorText(error['message']))

        setIsLoading(false)
    }

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