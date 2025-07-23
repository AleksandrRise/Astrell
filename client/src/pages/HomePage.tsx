import Navbar from "../features/home/components/Navbar"
import AiBall from "../features/home/components/AIBall"

export default function HomePage() {
    return (
        <main className="w-full h-screen hero-bg">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Logo />
                <Navbar.Info />
            </Navbar>

            <AiBall />
        </main>
    )
}
