import Transcript from "./Transcript";
import Player from "./VideoPlayer";

type VideoSectionProps = {
    children: React.ReactNode;
}

export default function VideoSection({ children }: VideoSectionProps) {
    return (
        <section>
            {children}
        </section>
    )
}

VideoSection.Transcript = Transcript
VideoSection.Player = Player