import transcriptIcon from "../assets/TranscriptIcon.png"
import summaryIcon from "../assets/SummaryIcon.png"
import highlightsIcon from "../assets/HighlightsIcon.png"
import enlargeIcon from "../assets/EnlargeIcon.png"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import type { ButtonType } from "../utils/ButtonType"
import { insightsHandler } from "../utils/insightsHandler.ts"
import InsightsBtn from "./InsightsBtn.tsx"
import LoadingText from "../../../shared/components/LoadingText.tsx"


type InsightsProps = {
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Insights({ setErrorText }: InsightsProps) {

    const location = useLocation()

    // States
    const [choiceClicked, setChoiceClicked] = useState<number>(0)
    const [isEnlarged, setIsEnlarged] = useState<boolean>(false)
    const [transcript] = useState<string>(location.state)
    const [summarization, setSummarization] = useState<string>("")
    const [highlights, setHighlights] = useState<string>("")

    const ADDRESS = "http://127.0.0.1:5000"


    const buttons: ButtonType[] = [
        {
            icon: transcriptIcon, 
            alt: "transcriptIcon", 
            name: "Transcription", 
            isActive: (choiceClicked === 0),
        },
        {
            icon: summaryIcon, 
            alt: "summaryIcon", 
            name: "Summary", 
            isActive: (choiceClicked === 1), 
        },
        {
            icon: highlightsIcon, 
            alt: "highlightsIcon", 
            name: "Highlights", 
            isActive: (choiceClicked === 2), 
        },
    ]

    const handleEnlarge = (): void => {
        return (isEnlarged ? setIsEnlarged(false) : setIsEnlarged(true))
    }
    useEffect(() => {
        const processData = async () => insightsHandler(ADDRESS, setSummarization, setHighlights, setErrorText)
        processData()
    }, [])

    console.log(highlights)
    console.log(summarization)

    // Properties
    const enlargeIconAlt = "Enlarge"

    // Classes
    const wrapperClasses = "size-full z-1 rounded-3xl row-start-2 p-px \
        bg-gradient-to-tl from-[#333333] from-[75%] to-[#999999] to-[100%] min-h-0"
    const transcriptEnlarger = (isEnlarged ? "absolute inset-0" : "relative")
    const innerWrapperClasses = "bg-blackBG rounded-3xl size-full pl-12 pr-15 py-8 flex flex-col"
    const enlargeClasses = "opacity-30 absolute right-5 top-5 size-5 cursor-pointer"
    const btnsClasses = "flex gap-11 relative pb-4 w-full"

    const underlineClasses = `h-[2px] w-2/9 bg-white/70 rounded-t-lg \
        absolute bottom-0 shadow-[0_0_12px_2px_#FFFFFF]/25 transition-all \
        lg:w-40`
    const underlinePosition = 
        choiceClicked === 0
            ? 'left-0'
            : choiceClicked === 1
                ? 'left-47'
                : 'left-89'

    const lineClasses = "mb-4 w-19/20 h-px bg-white/5"
    const textWrapperClasses = "w-full pr-15 relative overflow-y-auto break-words \
        scrollbarEdit"
    const textClasses = "text-sm text-white/60 text-left leading-6"

    return (
        <article className={`${wrapperClasses} ${transcriptEnlarger}`}>
            <div className={innerWrapperClasses}>
                <button className={enlargeClasses} onClick={handleEnlarge}>
                    <img src={enlargeIcon} alt={enlargeIconAlt} />
                </button>

                <div className={btnsClasses}>
                    {buttons.map((btn, index) => {
                        return (
                            <InsightsBtn btn={btn} index={index} setChoiceClicked={setChoiceClicked} />
                        )
                    })}

                    <div className={`${underlineClasses} ${underlinePosition}`}></div>
                </div>

                <div className={lineClasses}></div>

                <div className={textWrapperClasses}>
                    <p className={textClasses}>
                        {choiceClicked === 0 
                            ? (transcript) 
                            : (choiceClicked === 1 
                                ? (summarization === "" ? <LoadingText /> : summarization) 
                                : (highlights === "" ? <LoadingText /> : highlights)
                            )
                        }
                    </p>
                </div>
            </div>
            
        </article>
    )
}