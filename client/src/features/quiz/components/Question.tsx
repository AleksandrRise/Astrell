import Choice from "./Choice";

type QuestionsProps = {
    question: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    index: number;
    maxIndex: number;
    ansChoiceArr: Array<number | null>;
    setAnsChoice: React.Dispatch<React.SetStateAction<Array<number | null>>>;
}

export default function Question({ 
    question, setActiveIndex, index, maxIndex, ansChoiceArr, setAnsChoice 
}: QuestionsProps) {

    // Attributes
    const submitType = "submit"
    const submitVal = "Submit"

    // Classes
    const wrapperClasses = "m-auto size-full"
    const containerClasses = "size-full mt-20"
    const questionTitleClasses = "text-5xl font-lato font-bold tracking-wide"
    const questionSubtitleClasses = "relative font-bold text-xl tracking-wide \
        pb-4 after:content-[''] after:absolute after:w-5/6 after:h-px \
        after:bg-white/80 after:left-0 after:bottom-0 \
        after:shadow-[0_0_12px_rgba(255,255,255,0.75)]"
    const answersClasses = "ml-3.5 my-14.25 flex flex-col gap-5.75"
    const btnsClasses = ""
    const submitClasses = "cursor-pointer w-50 h-12.5 bg-white/15 font-bold \
        text-xl rounded-xl logoGradient-bg-3 p-[2px] shadow-[0_0_12px_0_rgba(28,154,214,0.5)] \
        hover:shadow-[0_0_12px_0_rgba(28,154,214,1)] hover:scale-101 \
        transition duration-300 active:opacity-75"
    const nextClasses = "cursor-pointer ml-5.5 text-lg font-bold tracking-wider"

    return (
        <div className={wrapperClasses}>

            <h2 className={questionTitleClasses}>QUESTION {index+1}</h2>

            <div className={containerClasses}>
                <h3 className={questionSubtitleClasses}>{question.question}</h3>

                <ul className={answersClasses}>
                    {question.answers.map((ans, key) => 
                        <Choice 
                            key={key}
                            index={key} 
                            questionNum={index} 
                            ans={ans} 
                            ansChoiceArr={ansChoiceArr}
                            setAnsChoice={setAnsChoice}
                        />              
                    )}
                </ul>

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