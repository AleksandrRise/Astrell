import axios from "axios"
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE"
import { getTranscript } from "../../../shared/utils/getTranscript"

export async function fetchData(
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    endpoint: string,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    const transcript = getTranscript()
    
    setIsLoading(true)

    await axios.get(`${APP_BACKEND_BASE}/api/v1/${endpoint}?transcript=${transcript}`)
        .then(res => res.data)
        .catch(error => setErrorText(error.message))

    setIsLoading(false)
}