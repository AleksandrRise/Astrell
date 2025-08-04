export default function Transcript() {

    // Classes
    const wrapperClasses = "relative rounded-3xl w-full h-full row-start-2 p-[1px] \
        bg-gradient-to-tl from-[#333333] from-[82%] to-[#999999] to-[100%] z-1"
    const innerWrapperClasses = "bg-blackBG rounded-3xl w-full h-full"

    return (
        <article className={wrapperClasses}>
            <div className={innerWrapperClasses}>
                <button></button>

                <div>
                    <button>
                        <img src="" alt="" />
                        <span>Transcription</span>
                    </button>
                    <button>
                        <img src="" alt="" />
                        <span>Summary</span>
                    </button>
                    <button>
                        <img src="" alt="" />
                        <span>Highlights</span>
                    </button>
                </div>

                <div></div>

                <div>
                    <p>
                        Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what yo bro. 

                        Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so 
                        what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what ...hen what so 

                        what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what ... hen what so 
                        what yo bro. Some text bla yes yes and then what so what yo bro. Some text bla yes yes and then what so                        
                    </p>
                </div>
            </div>
            
        </article>
    )
}