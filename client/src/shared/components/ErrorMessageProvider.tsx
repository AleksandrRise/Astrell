import { useState } from "react";
import { ErrorMessageContext } from "../utils/ErrorMessageContext";


export default function ErrorMessageProvider({ children }: { children: React.ReactNode}) {
    const [ errorText, setErrorText ] = useState<string>("")
    return (
        <ErrorMessageContext value={[errorText, setErrorText]}>
            {children}
        </ErrorMessageContext> 
    )
}