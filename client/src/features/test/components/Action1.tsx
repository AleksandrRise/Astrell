import { useState } from "react"
import QuizIcon from "../assets/QuizIcon.png"
import axios from "axios"

export default function Action1() {

    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const ADDRESS: string = "http://127.0.0.1:5000"

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.get(`${ADDRESS}/api/v1/getquiz`)

        if (response.status != 200) {
            console.error(response.statusText)
        } else {
            console.log(response.data)
        }
        setIsLoading(false)
    }

    // Classes
    const btnClasses = `rounded-3xl logoGradient-bg p-[2px] flex flex-col text-start \
        justify-center items-center cursor-pointer ${isLoading && "animate-pulse"}`
    const quizContainerClasses = ""
    const quizTextClasses = "text-5xl font-bold italic bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white tracking-wider"
    const quizSubtextClasses = "text-lg font-semibold italic"
    const quizHolderClasses = "flex items-center gap-1"
    const quizIconClasses = "size-7 -mt-1"
    const quizIconAlt = "QuizIcon"

    return (
        <button className={btnClasses} onClick={() => fetchData()}>
            <div className={quizContainerClasses}>
                <span className={quizSubtextClasses}>Make a</span>
                <div className={quizHolderClasses}>
                    <img className={quizIconClasses} src={QuizIcon} alt={quizIconAlt} />
                    <span className={quizTextClasses}>Quiz</span>
                </div>
            </div>
        </button>
    )
}
