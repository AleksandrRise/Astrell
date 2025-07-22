import Navbar from "../features/home/components/Navbar"

export default function HomePage() {
    return (
        <main className="w-full h-screen hero-bg">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Logo />
                <Navbar.Info />
            </Navbar>
        </main>
    )
}
