

type PlayerProps = {
    video: string
}

export default function Player({ video }: PlayerProps) {

    // Classes
    const videoClasses = "px-9 border rounded-[50px] "

    return (
        <video className={videoClasses} height="505px" width="760px" controls>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    )
}