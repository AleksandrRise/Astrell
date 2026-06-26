import Aside from "../features/dashboard/components/DashboardSidebar"
import Main from "../features/dashboard/components/DashboardMain"

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