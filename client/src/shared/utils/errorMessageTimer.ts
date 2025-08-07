export function errorMessageTimer(
    errorText: string,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) {
    if (errorText !== "") {

        const timer = setTimeout(() => {
            setErrorMessage("")
        }, 5000)

        return () => clearTimeout(timer)
    }
}