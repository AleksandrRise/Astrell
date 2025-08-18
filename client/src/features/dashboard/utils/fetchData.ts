import axios from "axios"

export async function fetchData(
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    endpoint: string,
    setErrorText: React.Dispatch<React.SetStateAction<string>>
) {
    
    setIsLoading(true)

    await axios.get(`/api/v1/${endpoint}`)
        .then(res => console.log(res.data))
        .catch(error => setErrorText(error.message))

    setIsLoading(false)
}