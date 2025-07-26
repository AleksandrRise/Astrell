import Transcript from "./Transcript";
import Player from "./Player";

type VideoSectionProps = {
    children: React.ReactNode;
}

export default function VideoSection({ children }: VideoSectionProps) {

    // Classes
    const sectionClasses = "flex justify-center mt-auto gap-19"

    return (
        <section className={sectionClasses}>
            {children}
        </section>
    )
}

VideoSection.Transcript = Transcript
VideoSection.Player = Player