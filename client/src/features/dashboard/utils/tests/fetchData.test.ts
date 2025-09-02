import { describe, it, expect, vi, type Mocked } from "vitest";
import { fetchData } from "../fetchData";
import axios from "axios"
import { APP_BACKEND_BASE } from "../../../../shared/utils/APP_BACKEND_BASE"
import { getTranscript } from "../../../../shared/utils/getTranscript";


vi.mock("axios")
const mockedAxios = axios as Mocked<typeof axios>

describe("fetchData", () => {

    const endpoint = "data"

    it("Mocking data fetch", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { ok: true }})

        const setIsLoading = vi.fn()
        const setErrorText = vi.fn()

        const transcript = getTranscript()

        await fetchData(setIsLoading, endpoint, setErrorText)

        expect(mockedAxios.get).toHaveBeenCalledWith(
            `${APP_BACKEND_BASE}/api/v1/${endpoint}?transcript=${transcript}`
        )

        expect(setIsLoading).toBeCalledTimes(2)
        expect(setIsLoading).toHaveBeenNthCalledWith(1, true)
        expect(setIsLoading).toHaveBeenNthCalledWith(2, false)
        expect(setErrorText).not.toHaveBeenCalled()

    })

})