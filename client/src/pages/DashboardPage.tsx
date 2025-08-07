import Aside from "../features/dashboard/components/Aside"
import Main from "../features/dashboard/components/Main"

export default function Test() {

    // Classes
    const mainClasses = "flex text-white hero-bg-response"

    return (
        <main className={mainClasses}>
            <Aside />
            <Main />
        </main>
    )
}