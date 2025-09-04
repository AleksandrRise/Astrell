import { useEffect, useState } from "react"

export function useAnimOnce(animation: string) {
    const animationKey = `${animation}Key`

    const [cls, setCls] = useState<string>("")

    useEffect(() => {
        if (sessionStorage.getItem(animationKey) || typeof window === "undefined") return

        setCls(animation)
        sessionStorage.setItem(animationKey, 'true')
    }, [])

    return cls
}