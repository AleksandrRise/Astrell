import transcriptIcon from "/assets/TranscriptIcon.png"
import summaryIcon from "/assets/SummaryIcon.png"
import highlightsIcon from "/assets/HighlightsIcon.png"
import enlargeIcon from "/assets/EnlargeIcon.png"
import { useState, useEffect } from "react"
import type { ButtonType } from "../utils/ButtonType.tsx"
import InsightsBtn from "./InsightsBtn.tsx"
import LoadingText from "../../../shared/components/LoadingText.tsx"
import React from "react"
import { handleSum } from "../utils/handleSum.ts"
import { handleHighs } from "../utils/handleHighs.ts"
import { useNavigate } from "react-router-dom"


type InsightsProps = {
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Insights({ setErrorText }: InsightsProps) {

    // Receive a transcript from localStorage
    const transcriptItem = localStorage.getItem("transcript") || ""
    const navigate = useNavigate()

    // States
    const [choiceClicked, setChoiceClicked] = useState<number>(0)
    const [isEnlarged, setIsEnlarged] = useState<boolean>(false)
    const [transcript] = useState<string>(transcriptItem)
    const [summarization, setSummarization] = useState<string>(localStorage.getItem("summarization") || "")
    const [highlights, setHighlights] = useState<string>(localStorage.getItem("highlights") || "")

    // Forbid manual page access
    useEffect(() => {
        if (!transcript) {
            navigate("/")
        }
    }, [])

    // All insights buttons
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

    // Enlarges Insights block if clicked
    const handleEnlarge = (): void => {
        return (isEnlarged ? setIsEnlarged(false) : setIsEnlarged(true))
    }

    // Processes Summarization and Highlights texts
    useEffect(() => {
        if (localStorage.getItem("summarization") === null) {
            const processData = async () => handleSum(setSummarization, setErrorText)
            processData()
        } 
        if (localStorage.getItem("highlights") === null) {
            const processData = async () => handleHighs(setHighlights, setErrorText)
            processData()
        }
    }, [])

    // Properties
    const enlargeIconAlt = "Enlarge"

    // Classes
    const wrapperClasses = "size-full z-1 rounded-3xl row-start-2 p-px \
        bg-gradient-to-tl from-[#333333] from-[75%] to-[#999999] to-[100%] min-h-0"
    const transcriptEnlarger = (isEnlarged ? "absolute inset-0" : "relative")
    const innerWrapperClasses = "bg-blackBG rounded-3xl size-full xl:pl-12 xl:pr-15 py-8 flex flex-col \
        lg:px-5"
    const enlargeClasses = "opacity-30 absolute right-5 top-5 size-5 cursor-pointer"
    const btnsClasses = "flex gap-11 relative pb-4 w-full"

    const underlineClasses = `h-[2px] bg-white/70 rounded-t-lg \
        absolute bottom-0 shadow-[0_0_12px_2px_#FFFFFF]/25 transition-all \
        lg:w-34 xl:w-40`
    const underlinePosition = 
        choiceClicked === 0
            ? 'left-0'
            : choiceClicked === 1
                ? 'lg:left-40.5 xl:left-48'
                : 'lg:left-77 xl:left-90.5'

    const lineClasses = "mb-4 w-19/20 h-px bg-white/5"
    const textWrapperClasses = "w-full pr-15 relative overflow-y-auto break-words \
        scrollbarEdit"
    const textClasses = "text-sm text-white/60 text-left leading-6 whitespace-pre-wrap"

    return (
        <article className={`${wrapperClasses} ${transcriptEnlarger}`}>
            <div className={innerWrapperClasses}>
                <button className={enlargeClasses} onClick={handleEnlarge}>
                    <img src={enlargeIcon} alt={enlargeIconAlt} />
                </button>

                <div className={btnsClasses}>
                    {buttons.map((btn, key) => {
                        return (
                            <InsightsBtn key={key} btn={btn} index={key} setChoiceClicked={setChoiceClicked} />
                        )
                    })}

                    <div className={`${underlineClasses} ${underlinePosition}`}></div>
                </div>

                <div className={lineClasses}></div>

                <div className={textWrapperClasses}>
                    {choiceClicked === 0 
                        ? (transcript === "" 
                            ? <LoadingText />
                            : <p className={textClasses}>{transcript}</p>) 
                        : (choiceClicked === 1 
                            ? (summarization === "" 
                                ? <LoadingText /> 
                                : <p className={textClasses}>{summarization}</p>) 
                            : (highlights === "" 
                                ? <LoadingText /> 
                                : <p className={textClasses}>{highlights}</p>)
                        )
                    }
                </div>
            </div>
            
        </article>
    )
}



