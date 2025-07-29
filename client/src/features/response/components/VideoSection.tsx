import Transcript from "./Transcript";
import Player from "./Player";
import Summarization from "./Summarization";

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
VideoSection.Summarization = Summarization
VideoSection.Player = Player