export function handleCircleColor(
    isActive: boolean,
    ansChoice: number | null,
    correctArr: Array<boolean | null>,
    index: number
) {
    const baseClasses = "rounded-full size-5 cursor-pointer transition duration-500"

    if (isActive) {
        const activeClasses = "scale-200 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]"

        if (ansChoice === null) { 
            return `bg-white ${activeClasses} ${baseClasses}`
        } else if (correctArr[index] !== null) {
            return `${correctArr[index] ? "bg-success" : "bg-error"} ${activeClasses} ${baseClasses}`
        } else {
            return `bg-[#FFCC00] ${activeClasses} ${baseClasses}`
        }
    } else {
        const nonActiveClasses = "scale-100 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"

        if (ansChoice === null) {
            return `bg-white/80 ${nonActiveClasses} ${baseClasses}`
        } 
        else if (correctArr[index] !== null) {
            return `${correctArr[index] ? "bg-success" : "bg-error"} ${nonActiveClasses} ${baseClasses}`
        }
        else {
            return `bg-[#FFCC00]/80 ${nonActiveClasses} ${baseClasses}`
        }
    }
}