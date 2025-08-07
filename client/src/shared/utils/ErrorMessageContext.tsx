import { createContext } from "react"

type ContextType = [string, React.Dispatch<React.SetStateAction<string>>]

const defaultContext: ContextType = ["", () => {}]

export const ErrorMessageContext = createContext<ContextType>(defaultContext)