
const ADDRESS = "http://127.0.0.1:5000"

const VideoPlayer = () => {

    // Classes
    const videoClasses = "rounded-3xl row-start-1 min-w-full"

    return (
        <video className={videoClasses} src={`${ADDRESS}/api/v1/getVideo`} controls />
    )
}

export default VideoPlayer