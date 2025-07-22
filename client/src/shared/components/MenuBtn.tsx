export default function MenuBtn() {

    const buttonClasses = `ml-14.25 mt-24.5 cursor-pointer p-2`
    const upperLineClasses = `w-12.5 h-[2px] bg-white`
    const lowerLineClasses = `w-10 h-[1px] bg-white mt-3.75`

    return (
        <button className={buttonClasses}>
            <div className={upperLineClasses}></div> 
            <div className={lowerLineClasses}></div>
        </button>
    )
}