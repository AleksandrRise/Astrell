import { useState } from "react"
import Navbar from "../shared/components/Navbar"
import AiBall from "../features/home/components/AiBall"
import Info from "../shared/components/Info"

export default function HomePage() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <main className="w-full h-screen hero-bg flex flex-col pb-30 relative">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Info>
                    <Info.HintBlock />
                </Navbar.Info>
            </Navbar>

            <AiBall isLoading={isLoading} setIsLoading={setIsLoading}>
                <AiBall.Text isLoading={isLoading} />
            </AiBall>
        </main>
    )
}
