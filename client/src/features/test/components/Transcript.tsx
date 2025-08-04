import transcriptIcon from "../assets/TranscriptIcon.png"
import summaryIcon from "../assets/SummaryIcon.png"
import highlightsIcon from "../assets/HighlightsIcon.png"
import enlargeIcon from "../assets/EnlargeIcon.png"


type buttonType = {
    icon: string;
    alt: string;
    name: string;
    isActive: boolean;
}

export default function Transcript() {

    const buttons: buttonType[] = [
        {icon: transcriptIcon, alt: "transcriptIcon", name: "Transcription", isActive: true},
        {icon: summaryIcon, alt: "summaryIcon", name: "Summary", isActive: false},
        {icon: highlightsIcon, alt: "highlightsIcon", name: "Highlights", isActive: false},
    ]

    // Classes
    const enlargeClasses = "opacity-30 absolute right-5 top-5 w-5 h-5"
    const wrapperClasses = "relative rounded-3xl w-full h-full row-start-2 p-[1px] \
        bg-gradient-to-tl from-[#333333] from-[75%] to-[#999999] to-[100%] z-1"
    const innerWrapperClasses = "bg-blackBG rounded-3xl w-full h-full px-13.5 p-8 flex flex-col"
    const btnsClasses = "flex gap-11"
    const btnClasses = "flex gap-2.5 items-center cursor-pointer"
    const iconClasses = "w-7.5 h-7.5"
    const btnTextClasses = "text-xl font-bold font-lato"
    const lineClasses = "my-4 w-full h-[1px] bg-white/5"
    const textWrapperClasses = "w-full h-full"
    const textClasses = "overflow-auto"

    return (
        <article className={wrapperClasses}>
            <div className={innerWrapperClasses}>
                <button className={enlargeClasses}>
                    <img src={enlargeIcon} alt="" />
                </button>

                <div className={btnsClasses}>
                    {buttons.map(btn => {
                        return (
                            <button className={btnClasses + (btn.isActive ? " opacity-90" : " opacity-50")}>
                                <img className={iconClasses} src={btn.icon} alt={btn.alt}/>
                                <span className={btnTextClasses}>{btn.name}</span>
                            </button>
                        )
                    })}
                </div>

                <div className={lineClasses}></div>

                <div className={textWrapperClasses}>
                    <p className={textClasses}>
                        Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what yo bro. 

                        Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what ifaepf and then what so what yo bro. Some text bla yes yes and then what so                        
                    </p>
                </div>
            </div>
            
        </article>
    )
}