import { describe, expect, it, vi, beforeEach } from "vitest";
import axios from "axios";

import { APP_BACKEND_BASE } from "../../../../shared/utils/APP_BACKEND_BASE";
import { fetchDashboardText } from "../dashboardApi";

vi.mock("axios");
vi.mock("../../../../shared/utils/getTranscript", () => ({
    getTranscript: () => "hello transcript",
}));

const axiosGetMock = vi.mocked(axios.get);

describe("fetchDashboardText", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("fetches dashboard text with transcript params", async () => {
        axiosGetMock.mockResolvedValueOnce({ data: "result text" });

        const result = await fetchDashboardText("summarize");

        expect(axiosGetMock).toHaveBeenCalledWith(
            `${APP_BACKEND_BASE}/api/v1/summarize`,
            {
                params: {
                    transcript: "hello transcript",
                },
            }
        );

        expect(result).toBe("result text");
    });
});