const VideoPlayer = () => {

    // Classes
    const videoClasses = "rounded-3xl row-start-1 min-w-full"

    return (
        <video className={videoClasses} src={`/api/v1/getVideo`} controls />
    )
}

export default VideoPlayer