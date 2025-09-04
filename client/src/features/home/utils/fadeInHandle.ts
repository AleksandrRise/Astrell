export function fadeInHandle(elementId: string) {
    const animationKey = "fadeInKey"
    const element = document.getElementById(elementId)

    window.addEventListener("load", () => {
        if (!sessionStorage.getItem(animationKey) && element) {
            element.classList.add("fadeIn")
            sessionStorage.setItem(animationKey, 'true')
        } else if (element) {
            element.classList.remove("fadeIn")
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
        }
    })
}