import { useEffect, useState } from "react"

export function useFadeInOnce() {
    const animationKey = "fadeInKey"
    const animation = "fadeIn"

    const [cls, setCls] = useState<string>("")

    useEffect(() => {
        if (sessionStorage.getItem(animationKey) || typeof window === "undefined") return

        setCls(animation)
        sessionStorage.setItem(animationKey, 'true')
    }, [])

    return cls
}