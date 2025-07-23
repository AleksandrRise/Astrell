import Commands from "../features/response/components/Commands";
import VideoSection from "../features/response/components/VideoSection";
import Navbar from "../shared/components/Navbar";


export default function ResponsePage() {
    return (
        <main>
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