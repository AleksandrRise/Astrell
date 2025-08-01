import videoSrc from "../assets/test.mp4"

export default function VideoPlayer() {
    // Classes
    const videoClasses = "outline-solid rounded-3xl row-start-1"

    return (
        <video className={videoClasses} src={videoSrc} controls></video>
    )
}