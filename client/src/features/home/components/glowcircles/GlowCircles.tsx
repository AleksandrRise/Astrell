export default function GlowCircles() {

    const circleOneLocation = "-top-10 -left-8"
    const circleTwoLocation = "-bottom-10 -right-8"
    const circleClasses = "md:hidden size-25 bg-logo-blue absolute z-1 rounded-full blur-[100px]"

    return (
        <>
            <div className={`${circleClasses} ${circleOneLocation}`}></div>
            <div className={`${circleClasses} ${circleTwoLocation}`}></div>        
        </>
    )
}