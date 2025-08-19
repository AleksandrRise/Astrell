import FlashIcon from "/public/assets/FlashIcon.png"
import { useState } from "react"
import { fetchData } from "../utils/fetchData"
import { useContext } from "react"
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext"

export default function Action2() {

    // Hooks
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ , setErrorText ] = useContext(ErrorMessageContext)
    

    // Classes
    const btnClasses = `rounded-3xl logoGradient-bg p-[2px] flex flex-col text-start \
        justify-center items-center ${isLoading && "animate-pulse"} \
        opacity-40`
    const flashContainerClasses = "flex flex-col"
    const flashIconClasses = "size-7"
    const flashIconAlt = "FlashcardsIcon"
    const flashTextClasses = "xl:text-3xl lg:text-2xl font-bold italic bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white tracking-wide"
    const flashSubtextClasses = "xl:text-sm lg:text-xs italic ml-auto font-semibold"

    return (
        <button disabled={true} className={btnClasses} onClick={() => fetchData(setIsLoading, "getcard", setErrorText)}>
            <div className={flashContainerClasses}>
                <img className={flashIconClasses} src={FlashIcon} alt={flashIconAlt} />
                <span className={flashTextClasses}>Flashcards</span>
                <span className={flashSubtextClasses}>Make</span>
            </div>
        </button>
    )
}