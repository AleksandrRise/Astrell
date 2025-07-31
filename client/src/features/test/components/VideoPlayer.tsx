import videoSrc from "../assets/test.mp4"

export default function VideoPlayer() {
    // Classes
    const videoClasses = "outline-solid"

    return (
        <video className={videoClasses} src={videoSrc} controls></video>
    )
}