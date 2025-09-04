export function fadeInHandle() {
    const animationKey = "fadeInKey"
    const animation = "fadeIn"

    window.addEventListener("load", () => {
        if (!sessionStorage.getItem(animationKey)) {
            sessionStorage.setItem(animationKey, 'true')
            return animation
        } else {
            return ""
        }
    })
}