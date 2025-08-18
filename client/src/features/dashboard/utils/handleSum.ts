import axios from "axios"

export async function handleSum(
    setSummarization: React.Dispatch<React.SetStateAction<string>>,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    await axios.get(`/api/v1/summarize`)
        .then(res => {
            localStorage.setItem("summarization", res.data)
            setSummarization(res.data)
        })
        .catch(error => setErrorText(error.message))    
}