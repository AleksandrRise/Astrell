

type AnswersProps = {
    q: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }
    index: number;
}

export default function Answer({ q, index }: AnswersProps) {

    // Attributes
    const type = "radio"

    // Classes
    const questionWrapperClasses = ""
    const questionTitleClasses = ""
    const answerClasses = ""
    const ansRadioClasses = ""
    const ansTextClasses = ""

    return (
        <div className={questionWrapperClasses}>
            <h3 className={questionTitleClasses}>{q.question}</h3>

            {q.answers.map((ans, key) => 
                <div key={key} className={answerClasses}>
                    <input className={ansRadioClasses} type={type} id={`ans-${index}-${key}`}  />
                    <label className={ansTextClasses} htmlFor={`ans-${index}-${key}`}>{ans.answer}</label>
                </div>                
            )}
        </div>        
    )
}