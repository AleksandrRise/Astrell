import Navbar from "../shared/components/Navbar"
import AiBall from "../features/home/components/AiBall"
import Info from "../shared/components/Info"

export default function HomePage() {

    return (
        <main className="w-full h-screen hero-bg flex flex-col pb-30">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Info>
                    <Info.HintBlock />
                </Navbar.Info>
            </Navbar>

            <AiBall>
                <AiBall.Text />
            </AiBall>
        </main>
    )
}
