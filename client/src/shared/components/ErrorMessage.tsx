type ErrorProps = {
    message: string;
}

export default function ErrorMessage({ message }: ErrorProps) {
    const wrapperClasses = "h-100 w-150 bg-white absolute top-0 left-0 z-1"
    const h1Classes = ""
    const pClasses = ""

    return (
        <div className={wrapperClasses}>
            <h1 className={h1Classes}>Error!</h1>
            <p className={pClasses}>{message}</p>
        </div>
    )
}