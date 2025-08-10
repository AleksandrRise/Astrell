import { useState } from "react"
import type { QuestionsProps } from "../utils/QuestionsProps"

export default function Question({ question, index }: QuestionsProps) {

    const [ choice, setChoice ] = useState<number | null>(0)

    // Attributes
    const selectionType = "radio"
    const submitType = "submit"
    const submitVal = "Submit"

    // Classes
    const wrapperClasses = "m-auto size-full"
    const containerClasses = "size-full"
    const questionTitleClasses = "text-5xl font-lato font-bold tracking-wide \
        "
    const questionSubtitleClasses = "relative font-bold text-xl tracking-wide \
        pb-4 after:content-[''] after:absolute after:w-5/6 after:h-px \
        after:bg-white/80 after:left-0 after:bottom-0 \
        after:shadow-[0_0_12px_rgba(255,255,255,0.75)]"
    const answerClasses = "text-xl text-white/50"
    const ansRadioClasses = ""
    const ansTextClasses = ""
    const chosenClasses = "text-white font-bold"
    const btnsClasses = ""
    const submitClasses = "cursor-pointer"
    const nextClasses = "cursor-pointer"

    return (
        <div className={wrapperClasses}>

            <h2 className={questionTitleClasses}>QUESTION {index+1}</h2>

            <div className={containerClasses}>
                <h3 className={questionSubtitleClasses}>{question.question}</h3>

                {question.answers.map((ans, key) => 
                    <div key={key} className={answerClasses}>
                        <input 
                            className={ansRadioClasses} 
                            type={selectionType} 
                            id={`ans-${index}-${key}`}
                            onClick={() => setChoice(key)}
                            checked={choice === key}  
                        />
                        <label 
                            className={`${ansTextClasses} ${choice === key && chosenClasses}`} 
                            htmlFor={`ans-${index}-${key}`}>
                                {ans.answer}
                        </label>
                    </div>                
                )}

                <div className={btnsClasses}>
                    <input className={submitClasses} type={submitType} value={submitVal} />
                    <button className={nextClasses}>Next</button>
                </div>
            </div>

            
        </div>        
    )
}