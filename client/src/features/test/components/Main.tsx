import Transcript from "./Transcript"
import VideoPlayer from "./VideoPlayer"
import Notes from "./Notes"
import Actions from "./Actions"

export default function Main() {

    // Classes
    const mainClasses = "w-full h-screen px-17 py-16 grid grid-cols-2 grid-rows-2"

    return (
        <main className={mainClasses}>
            <VideoPlayer />

            <Notes />

            <Transcript />

            <Actions />
        </main>
    )
}