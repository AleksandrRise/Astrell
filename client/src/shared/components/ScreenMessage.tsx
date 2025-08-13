export default function ScreenMessage({ children }: {children: React.ReactNode}) {

    // Classes
    const wrapperClasses = "flex flex-col justify-center items-center \
        lg:hidden absolute top-0 left-0 size-full bg-white z-999 text-center \
        px-5"
    const titleClasses = "text-2xl mb-5 font-semibold"
    const textClasses = "max-w-100 text-md"

    return (
        <>
            <div className={wrapperClasses}>
                <h1 className={titleClasses}>Small Screen Size Detected</h1>
                <p className={textClasses}>
                    Unfortunately, the website is not optimized for devices
                    with a small screen resolution yet.
                </p>
            </div>    

            {children}    
        </>
    )
}