import { useEffect, useState } from "react"

export function useAnimOnce(animationKey: string) {
    let animation = ""
    for (const c of animationKey) {
        if (c === ":") break
        animation = animation + c
    }
    console.log(animation)

    const [cls, setCls] = useState<string>("opacity-100")

    useEffect(() => {
        if (sessionStorage.getItem(animationKey) || typeof window === "undefined") return

        setCls(animation)
        sessionStorage.setItem(animationKey, 'true')
    }, [])

    return cls
}