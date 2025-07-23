import videoSrc from "../assets/top5box.mp4"

export default function Player() {
    const videoClasses = "px-9 border rounded-[50px] "

    return (
        <video className={videoClasses} height="505px" width="760px" controls>
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    )
}