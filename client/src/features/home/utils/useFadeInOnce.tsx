import { useEffect, useState } from "react"

export default function useFadeInOnce() {
    const animationKey = "fadeInKey"
    const animation = "fadeIn"

    const [cls, setCls] = useState<string>("")

    useEffect(() => {
        if (sessionStorage.getItem(animationKey) !== 'true') {
            sessionStorage.setItem(animationKey, 'true')
            setCls(animation)
        } else {
            setCls("")
        }
    }, [])

    return cls
}