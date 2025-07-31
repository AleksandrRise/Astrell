import Aside from "../features/test/components/Aside"
import Main from "../features/test/components/Main"

export default function Test() {

    // Classes
    const mainClasses = "flex text-white"

    return (
        <main className={mainClasses}>
            <Aside />
            <Main />
        </main>
    )
}