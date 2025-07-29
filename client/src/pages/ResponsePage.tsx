import { useLocation } from "react-router-dom";
import Commands from "../features/response/components/Commands";
import VideoSection from "../features/response/components/VideoSection";
import Navbar from "../shared/components/Navbar";
import { useState } from "react";


export default function ResponsePage() {
    const location = useLocation()
    const transcript: string = location.state
    const videoUrl: string = localStorage.getItem("video")!

    const [ summarization, setSummarization ] = useState<string>("")
    const [ sumPage, setSumPage ] = useState<boolean>(false)

    // Classes
    const mainClasses = "h-screen w-full hero-bg text-white flex flex-col justify-start"

    const cardTexts: string[] = [
        "Make a Quiz",
        "Highlight Key Concepts",
        "Generate Flashcards",
        "Summarize",
    ]

    return (
        <main className={mainClasses}>
            <Navbar>
                <Navbar.MenuBtn />
            </Navbar>

            <VideoSection>
                {sumPage 
                    ? <VideoSection.Summarization 
                        summarization={summarization} 
                        setSumPage={setSumPage} 
                    /> 
                    : <VideoSection.Transcript 
                        transcript={transcript} 
                        summarization={summarization} 
                        setSumPage={setSumPage} 
                    />
                }

                <VideoSection.Player videoUrl={videoUrl} />
            </VideoSection>

            <Commands>
                {cardTexts.map((text) => 
                    <Commands.Card 
                        text={text} 
                        setSummarization={setSummarization}
                        setSumPage={setSumPage}
                    />
                )}
            </Commands>
        </main>
    )
}