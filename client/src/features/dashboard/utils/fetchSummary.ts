import type { Dispatch, SetStateAction } from "react";

import { fetchDashboardText } from "./dashboardApi";

export async function fetchSummary(
    setSummary: Dispatch<SetStateAction<string>>,
    setErrorText: Dispatch<SetStateAction<string>>
) {
    try {
        const summary = await fetchDashboardText("summarize");

        localStorage.setItem("summarization", summary);
        setSummary(summary);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to fetch summary";

        setErrorText(message);
    }
}