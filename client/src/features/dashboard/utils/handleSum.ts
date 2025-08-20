import axios from "axios"
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE"
import { getTranscript } from "../../../shared/utils/getTranscript"

export async function handleSum(
    setSummarization: React.Dispatch<React.SetStateAction<string>>,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    const transcript = getTranscript()

    await axios.get(`${APP_BACKEND_BASE}/api/v1/summarize?transcript=${transcript}`)
        .then(res => {
            localStorage.setItem("summarization", res.data)
            setSummarization(res.data)
        })
        .catch(error => setErrorText(error.message))    
}