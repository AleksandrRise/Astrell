import { useEffect, useState } from "react"
import Navbar from "../shared/components/Navbar"
import AiBall from "../features/home/components/AiBall"
import Info from "../shared/components/Info"
import ErrorMessage from "../shared/components/ErrorMessage"

export default function HomePage() {

    // States
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>("")

    useEffect(() => {
        if (errorText) {
            const timer = setTimeout(() => {
                setErrorText("")
            }, 5000)
    
            return () => clearTimeout(timer)
        }
    }, [errorText])

    return (
        <main className="w-full h-screen hero-bg flex flex-col pb-30 relative">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Info>
                    <Info.HintBlock />
                </Navbar.Info>
            </Navbar>

            <AiBall setErrorText={setErrorText} setIsLoading={setIsLoading}>
                <AiBall.Text isLoading={isLoading} />
            </AiBall>

            {errorText ? <ErrorMessage message={errorText}/> : null}
        </main>
    )
}
