import { useLocation } from "react-router-dom";
import Commands from "../features/response/components/Commands";
import VideoSection from "../features/response/components/VideoSection";
import Navbar from "../shared/components/Navbar";


export default function ResponsePage() {
    const location = useLocation()
    const transcript: string = location.state
    const videoUrl: string = localStorage.getItem("video")!

    // Classes
    const mainClasses = "h-screen w-full hero-bg text-white flex flex-col justify-start"

    const cardTexts: string[] = [
        "Make a Quiz",
        "Highlight Key Concepts",
        "Generate Flashcards",
        "Summarize",
    ]

    return (
        <main className={mainClasses}>
            <Navbar>
                <Navbar.MenuBtn />
            </Navbar>

            <VideoSection>
                <VideoSection.Transcript transcript={transcript} />
                <VideoSection.Player videoUrl={videoUrl} />
            </VideoSection>

            <Commands>
                {cardTexts.map((text) => <Commands.Card text={text} />)}
            </Commands>
        </main>
    )
}