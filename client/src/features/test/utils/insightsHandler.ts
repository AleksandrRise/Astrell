import axios from "axios"


export function insightsHandler(
    ADDRESS: string,
    setSummarization: React.Dispatch<React.SetStateAction<string>>,
    setHighlights: React.Dispatch<React.SetStateAction<string>>,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) 
{
    return async () => {
        await axios.get(`${ADDRESS}/api/v1/summarize`)
            .then(res => setSummarization(res.data))
            .catch(error => setErrorText(error.message))
        
        await axios.get(`${ADDRESS}/api/v1/gethighlight`)
            .then(res => setHighlights(res.data))
            .catch(error => setErrorText(error.message))
    }
}