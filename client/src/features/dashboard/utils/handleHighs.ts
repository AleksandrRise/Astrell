import axios from "axios"
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE"

export async function handleHighs(
    setHighlights: React.Dispatch<React.SetStateAction<string>>,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    await axios.get(`${APP_BACKEND_BASE}/api/v1/gethighlight`)
        .then(res => {
            localStorage.setItem("highlights", res.data)
            setHighlights(res.data)
        })
        .catch(error => setErrorText(error.message)) 
}