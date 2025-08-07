import Insights from "./Insights.tsx"
import VideoPlayer from "./VideoPlayer.tsx"
import Notes from "./Notes.tsx"
import Actions from "./Actions.tsx"
import { useState } from "react"
import ErrorMessage from "../../../shared/components/ErrorMessage.tsx"

export default function Main() {

    const [errorText, setErrorText] = useState<string>("")

    // Classes
    const mainClasses = "relative p-10 flex w-full h-screen \
        justify-center items-center gap-8 overflow-hidden"
    const leftColClasses = "grid grid-rows-[auto_2fr] flex-2 size-full gap-4"
    const rightColClasses = "grid grid-rows-[2fr_1fr] flex-1 size-full gap-6"

    return (
        <main className={mainClasses}>
            <div className={leftColClasses}>
                <VideoPlayer />
                <Insights setErrorText={setErrorText} />
            </div>

            <div className={rightColClasses}>
                <Notes />
                <Actions />
            </div>

            {errorText && <ErrorMessage message={errorText} />}
        </main>
    )
}