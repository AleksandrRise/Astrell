import Transcript from "./Transcript"
import VideoPlayer from "./VideoPlayer"
import Notes from "./Notes"
import Actions from "./Actions"

export default function Main() {

    // Classes
    const mainClasses = "p-10 flex w-full h-screen \
        justify-center items-center gap-8"
    const leftColClasses = "grid grid-rows-[auto_2fr] flex-2 h-full w-full gap-7"
    const rightColClasses = "grid grid-rows-[2fr_1fr] flex-1 h-full w-full gap-6"

    return (
        <main className={mainClasses}>
            <div className={leftColClasses}>
                <VideoPlayer />
                <Transcript />
            </div>

            <div className={rightColClasses}>
                <Notes />
                <Actions />
            </div>
        </main>
    )
}