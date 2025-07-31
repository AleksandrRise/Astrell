import Transcript from "./Transcript"
import VideoPlayer from "./VideoPlayer"
import Notes from "./Notes"
import Actions from "./Actions"

export default function Main() {

    // Classes
    const mainClasses = ""

    return (
        <main className={mainClasses}>
            <VideoPlayer />

            <Transcript />

            <Notes />

            <Actions />
        </main>
    )
}