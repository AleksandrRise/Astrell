import axios from "axios"

export async function handleHighs(
    setHighlights: React.Dispatch<React.SetStateAction<string>>,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    await axios.get(`/api/v1/gethighlight`)
        .then(res => {
            localStorage.setItem("highlights", res.data)
            setHighlights(res.data)
        })
        .catch(error => setErrorText(error.message)) 
}