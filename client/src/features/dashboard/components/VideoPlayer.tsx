import React from "react"


const VideoPlayer = React.memo(() => {
    
    const videoUrl: string = localStorage.getItem("video") || ""

    // Classes
    const videoClasses = "rounded-3xl row-start-1 min-w-full"

    return (
        <video className={videoClasses} src={videoUrl} controls />
    )
})

export default VideoPlayer