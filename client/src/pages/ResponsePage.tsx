import Commands from "../features/response/components/Commands";
import VideoSection from "../features/response/components/VideoSection";
import Navbar from "../shared/components/Navbar";


export default function ResponsePage() {
    const mainClasses = "h-screen w-full hero-bg"

    return (
        <main className={mainClasses}>
            <Navbar>
                <Navbar.MenuBtn />
            </Navbar>

            <VideoSection>
                <VideoSection.Transcript />
                <VideoSection.Player/>
            </VideoSection>

            <Commands />
        </main>
    )
}