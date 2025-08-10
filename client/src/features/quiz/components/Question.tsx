import { useState } from "react"

type QuestionsProps = {
    question: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    index: number;
    maxIndex: number;
}

export default function Question({ question, setActiveIndex, index, maxIndex }: QuestionsProps) {

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
    const answersClasses = "ml-3.5 my-14.25 flex flex-col gap-5.75"
    const answerClasses = "relative text-xl text-white/50 \
        pb-2.75 answerLine cursor-pointer"
    const ansRadioClasses = ""
    const ansTextClasses = "pl-5"
    const chosenClasses = "text-white font-bold"
    const btnsClasses = ""
    const submitClasses = "cursor-pointer px-15 py-3 bg-white/15 font-bold \
        text-xl rounded-xl"
    const nextClasses = "cursor-pointer ml-5.5 text-lg font-bold tracking-wider"

    return (
        <div className={wrapperClasses}>

            <h2 className={questionTitleClasses}>QUESTION {index+1}</h2>

            <div className={containerClasses}>
                <h3 className={questionSubtitleClasses}>{question.question}</h3>

                <div className={answersClasses}>
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
                </div>

                <div className={btnsClasses}>
                    <input className={submitClasses} type={submitType} value={submitVal} />
                    <button 
                        className={nextClasses} 
                        onClick={() => setActiveIndex(prev => 
                            prev === maxIndex ? 0 : (prev + 1)
                        )}
                    >Next
                    </button>
                </div>
            </div>

            
        </div>        
    )
}