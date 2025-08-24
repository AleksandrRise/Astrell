type ErrorProps = {
    message: string;
}

export default function ErrorMessage({ message }: ErrorProps) {

    // Classes
    const wrapperClasses = `lg:h-50 md:h-30 h-25 md:w-100 w-50 bg-white \ 
        absolute md:top-1/12 top-1/9 left-0 right-0 z-2 md:rounded-[50px] \
        rounded-[30px] flex flex-col justify-center \ 
        items-center bg-white/8 rounded-4xl text-white \
        shadow-[0_0_2px_0_rgba(0,149,255,0.75)_inset] backdrop-blur-[100px] \
        mx-auto fadeIn`
    const h1Classes = "font-bold text-error tracking-wide md:text-2xl text-xl"
    const pClasses = "md:text-lg text-sm font-regular"

    return (
        <div className={wrapperClasses}>
            <h1 className={h1Classes}>Error</h1>
            <p className={pClasses}>{message}</p>
        </div>
    )
}