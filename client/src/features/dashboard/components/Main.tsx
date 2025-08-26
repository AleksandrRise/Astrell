import Insights from "./Insights.tsx"
import VideoPlayer from "./VideoPlayer.tsx"
import Notes from "./Notes.tsx"
import Actions from "./Actions.tsx"
import ErrorMessage from "../../../shared/components/ErrorMessage.tsx"
import { useContext } from "react"
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext.tsx"

export default function Main() {

    const [errorText, setErrorText] = useContext(ErrorMessageContext)


    // Classes
    const mainClasses = "relative p-10 flex md:flex-row flex-col w-full h-screen \
        justify-center items-center gap-8 md:overflow-hidden overflow-y-auto"
    const leftColClasses = "grid grid-rows-[auto_2fr] flex-2 size-full gap-4"
    const rightColClasses = "grid grid-rows-[2fr_1fr] flex-1 size-full gap-6"

    return (
        <>
            <main className={mainClasses}>
                <div className={leftColClasses}>
                    <VideoPlayer />
                    <Insights setErrorText={setErrorText} />
                </div>

                <div className={rightColClasses}>
                    <Notes />
                    <Actions />
                </div>
            </main>

            {errorText !== "" && <ErrorMessage message={errorText} />}
        </>
    )
}