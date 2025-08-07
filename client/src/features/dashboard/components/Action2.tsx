import FlashIcon from "../assets/FlashIcon.png"
import axios from "axios"
import { useState } from "react"

export default function Action2() {

    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const ADDRESS: string = "http://127.0.0.1:5000"

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.get(`${ADDRESS}/api/v1/getcard`)

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
    const flashContainerClasses = "flex flex-col"
    const flashIconClasses = "size-7"
    const flashIconAlt = "FlashcardsIcon"
    const flashTextClasses = "text-3xl font-bold italic bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white tracking-wide"
    const flashSubtextClasses = "text-sm italic ml-auto font-semibold"

    return (
        <button className={btnClasses} onClick={() => fetchData()}>
            <div className={flashContainerClasses}>
                <img className={flashIconClasses} src={FlashIcon} alt={flashIconAlt} />
                <span className={flashTextClasses}>Flashcards</span>
                <span className={flashSubtextClasses}>Make</span>
            </div>
        </button>
    )
}