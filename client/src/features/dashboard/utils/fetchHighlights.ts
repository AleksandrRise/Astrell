import type { Dispatch, SetStateAction } from "react";

import { fetchDashboardText } from "./dashboardApi";

export async function fetchHighlights(
    setHighlights: Dispatch<SetStateAction<string>>,
    setErrorText: Dispatch<SetStateAction<string>>
) {
    try {
        const highlights = await fetchDashboardText("gethighlight");

        localStorage.setItem("highlights", highlights);
        setHighlights(highlights);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to fetch highlights";

        setErrorText(message);
    }
}