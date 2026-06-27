import axios from "axios";

import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE";
import { getTranscript } from "../../../shared/utils/getTranscript";

export async function fetchDashboardText(endpoint: string) {
    const transcript = getTranscript();

    const response = await axios.get<string>(`${APP_BACKEND_BASE}/api/v1/${endpoint}`, {
        params: { transcript },
    });

    return response.data;
}