import axios from "axios"
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE"
import type { NavigateFunction } from "react-router-dom"

export async function videoUpload(
    formData: FormData, 
    isLoading: boolean,
    setErrorText: React.Dispatch<React.SetStateAction<string>>, 
    navigate: NavigateFunction, 
) {
    if (isLoading) return;

    await axios.post(`${APP_BACKEND_BASE}/api/v1/uploadVideo`, formData, {
        headers: {
            "Content-Type":"multipart/form-data"
        }
    })
        .then(res => {
            if (res.data) {
                localStorage.setItem("transcript", res.data)
                localStorage.removeItem("summarization")
                localStorage.removeItem("highlights")

                navigate("/dashboard")
            } else {
                throw new Error("Transcript was not found.")
            }
        })
        .catch(error => setErrorText(error['message'] || "Upload failed"))
}