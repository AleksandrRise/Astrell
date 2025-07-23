import Transcript from "./Transcript";
import Player from "./VideoPlayer";

type VideoSectionProps = {
    children: React.ReactNode;
}

export default function VideoSection({ children }: VideoSectionProps) {
    const sectionClasses = "m-auto"

    return (
        <section className={sectionClasses}>
            {children}
        </section>
    )
}

VideoSection.Transcript = Transcript
VideoSection.Player = Player