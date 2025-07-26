type ErrorProps = {
    message: string;
}

export default function ErrorMessage({ message }: ErrorProps) {

    // Classes
    const wrapperClasses = `h-50 w-100 bg-white absolute top-1/12 left-0 right-0 z-1 rounded-[50px] \
        flex flex-col justify-center items-center bg-white/8 rounded-4xl text-white\
        shadow-[0_0_2px_0_rgba(0,149,255,0.75)_inset] backdrop-blur-[100px] \
        mx-auto fadeIn`
    const h1Classes = "font-bold text-red-500 tracking-wide text-2xl"
    const pClasses = "font-xl font-regular"

    return (
        <div className={wrapperClasses}>
            <h1 className={h1Classes}>Error</h1>
            <p className={pClasses}>{message}</p>
        </div>
    )
}