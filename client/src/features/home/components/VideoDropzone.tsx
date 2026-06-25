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
}