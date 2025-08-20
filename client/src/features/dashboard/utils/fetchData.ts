import axios from "axios"
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE"

export async function fetchData(
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    endpoint: string,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    
    setIsLoading(true)

    await axios.get(`${APP_BACKEND_BASE}/api/v1/${endpoint}`)
        .then(res => console.log(res.data))
        .catch(error => setErrorText(error.message))

    setIsLoading(false)
}