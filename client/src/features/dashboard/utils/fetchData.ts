import axios from "axios"

export async function fetchData(
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    ADDRESS: string,
    endpoint: string
) {
    setIsLoading(true)

    await axios.get(`${ADDRESS}/api/v1/${endpoint}`)
        .then(res => console.log(res.data))
        .catch(error => console.error("Error Message: " + error.message))

    setIsLoading(false)
}