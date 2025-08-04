import transcriptIcon from "../assets/TranscriptIcon.png"
import summaryIcon from "../assets/SummaryIcon.png"
import highlightsIcon from "../assets/HighlightsIcon.png"
import enlargeIcon from "../assets/EnlargeIcon.png"
import { useState } from "react"


type buttonType = {
    icon: string;
    alt: string;
    name: string;
    isActive: boolean;
}

export default function Transcript() {

    const [btnClicked, setBtnClicked] = useState<number>(0);

    const buttons: buttonType[] = [
        {
            icon: transcriptIcon, 
            alt: "transcriptIcon", 
            name: "Transcription", 
            isActive: (btnClicked === 0),
        },
        {
            icon: summaryIcon, 
            alt: "summaryIcon", 
            name: "Summary", 
            isActive: (btnClicked === 1), 
        },
        {
            icon: highlightsIcon, 
            alt: "highlightsIcon", 
            name: "Highlights", 
            isActive: (btnClicked === 2), 
        },
    ]

    const transcript: string = 
        `
            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro.

            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what ifaepf and then what so what yo bro. Some text bla yes yes and then what so                        
            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro.

            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what ifaepf and 
            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what yo bro.

            Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
            what ifaepf and
        `
    const summary: string = ``
    const highlights: string = ``

    const handleClick = (index: number): void => {
        setBtnClicked(index)
    }
    // 0, 1/4, 9/19
    // Classes
    const wrapperClasses = "relative rounded-3xl size-full row-start-2 p-px \
        bg-gradient-to-tl from-[#333333] from-[75%] to-[#999999] to-[100%]"
    const innerWrapperClasses = "bg-blackBG rounded-3xl size-full pl-12 pr-15 py-8 flex flex-col"
    const enlargeClasses = "opacity-30 absolute right-5 top-5 size-5 cursor-pointer"
    const btnsClasses = "flex gap-11 relative pb-4 w-full"
    const btnClasses = "flex gap-2.5 items-center cursor-pointer"
    const underlineClasses = `h-[2px] w-2/9 bg-white/70 rounded-t-lg \
        absolute bottom-0 shadow-[0_0_12px_2px_#FFFFFF]/25 transition-all \
        left-${btnClicked === 0 ? "0" : (btnClicked === 1 ? "1/4" : "9/19")}`
    const iconClasses = "size-7.5"
    const btnTextClasses = "text-xl font-bold font-lato"
    const lineClasses = "mb-4 w-19/20 h-px bg-white/5"
    const textWrapperClasses = "w-full h-44 pr-15 relative overflow-y-auto break-words"
    const textClasses = "text-sm text-white/60 text-left leading-6"

    return (
        <article className={wrapperClasses}>
            <div className={innerWrapperClasses}>
                <button className={enlargeClasses}>
                    <img src={enlargeIcon} alt="Enlarge" />
                </button>

                <div className={btnsClasses}>
                    {buttons.map((btn, index) => {
                        return (
                            <button className={btnClasses + (btn.isActive ? " opacity-90" : " opacity-50")}
                                key={index} onClick={() => handleClick(index)}
                            >
                                <img className={iconClasses} src={btn.icon} alt={btn.alt}/>
                                <span className={btnTextClasses}>{btn.name}</span>
                            </button>
                        )
                    })}

                    <div className={underlineClasses}></div>
                </div>

                <div className={lineClasses}></div>

                <div className={textWrapperClasses}>
                    <p className={textClasses}>
                        {transcript}
                    </p>
                </div>
            </div>
            
        </article>
    )
}