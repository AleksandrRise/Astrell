import type { QuestionsProps } from "../utils/QuestionsProps"

export default function Question({ question, index }: QuestionsProps) {

    // Attributes
    const selectionType = "radio"
    const submitType = "submit"
    const submitVal = "Submit"

    // Classes
    const wrapperClasses = ""
    const containerClasses = ""
    const questionTitleClasses = ""
    const answerClasses = ""
    const ansRadioClasses = ""
    const ansTextClasses = ""
    const btnsClasses = ""
    const submitClasses = "cursor-pointer"
    const nextClasses = "cursor-pointer"

    return (
        <div className={wrapperClasses}>

            <h2>QUESTION {index+1}</h2>

            <div className={containerClasses}>
                <h3 className={questionTitleClasses}>{question.question}</h3>

                {question.answers.map((ans, key) => 
                    <div key={key} className={answerClasses}>
                        <input className={ansRadioClasses} type={selectionType} id={`ans-${index}-${key}`}  />
                        <label className={ansTextClasses} htmlFor={`ans-${index}-${key}`}>{ans.answer}</label>
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