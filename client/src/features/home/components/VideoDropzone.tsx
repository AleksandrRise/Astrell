import { useState } from "react";

type VideoDropzoneProps = {
  onFileDrop: (file: File) => void;
};

export default function VideoDropzone({ onFileDrop }: VideoDropzoneProps) {
    const [isDragged, setIsDragged] = useState(false);

    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDragged(true);
    }    

    function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDragged(false);
    }

    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDragged(false);

        const file = event.dataTransfer.files[0];
        if (!file) return;

        onFileDrop(file);
    }    

    // Classes
    const wrapperClasses = [
        "absolute w-3/4 h-3/4 bg-white/20 rounded-4xl",
        "inset-0 m-auto flex justify-center items-center z-1",
        "border-5 border-dashed border-white/30 transition",
        isDragged ? "opacity-100" : "opacity-0",
    ].join(" ");    

    return (
        <div
            className={wrapperClasses}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            role="button"
            aria-label="Drop video file here"
        >
        <span className="text-white font-bold tracking-wider text-3xl">
            Drop a video within the field.
        </span>
        </div>
    );

    // CLEANUP: Remove commented-out code if not needed

    // // Other hooks
    // const [, setErrorText] = useContext(ErrorMessageContext)
    // const navigate = useNavigate()

    // // States
    // const [isDragged, setIsDragged] = useState<boolean>(false)
    // const [file, setFile] = useState<File | null>(null)

    // // Functions
    // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDragged(true)
    // }

    // const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDragged(false)
    // }

    // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDragged(false)

    //     const droppedFile: File = e.dataTransfer.files[0]
    //     if (!droppedFile) return

    //     setFile(droppedFile)
    // }

    // // Sending Dragged File to Python
    // useEffect(() => {
    //     if (!file) return

    //     const upload = async () => {
    //         setIsLoading(true);

    //         const formData: FormData = new FormData()
    //         formData.append("file", file)

    //         await axios.post(`${APP_BACKEND_BASE}/api/v1/uploadVideo`, formData, {
    //             headers: {
    //                 "Content-Type":"multipart/form-data"
    //             }
    //         })
    //             .then(res => {
    //                 if (res.data) {
    //                     localStorage.setItem("transcript", res.data)
    //                     localStorage.removeItem("summarization")
    //                     localStorage.removeItem("highlights")

    //                     navigate("/dashboard")
    //                 } else {
    //                     throw new Error("Transcript was not found.")
    //                 }
    //             })
    //             .catch(error => setErrorText(error['message'] || "Upload failed"))
    //             .finally(() => setIsLoading(false))
    //     }

    //     upload()
    // }, [file])

    // // Classes
    // const wrapperClasses = `absolute w-3/4 h-3/4 bg-white/20 rounded-4xl \
    //     top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center z-1 \
    //     border-5 border-dashed border-white/30 transition ${!isDragged && "opacity-0"}`
    // const spanClasses = "text-white font-bold tracking-wider text-3xl"

    // return (
    //     <div 
    //         className={wrapperClasses}
    //         onDragOver={handleDragOver}
    //         onDragLeave={handleDragLeave}
    //         onDrop={handleDrop}
    //     >
    //         <span className={spanClasses}>Drop a video within the field.</span>
    //     </div>
    // )
}