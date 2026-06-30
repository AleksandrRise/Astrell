import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

import { fetchSummary } from "../utils/fetchSummary";
import { fetchHighlights } from "../utils/fetchHighlights";

export type InsightTab = "transcript" | "summary" | "highlights";

type UseStudyInsightsParams = {
    setErrorText: Dispatch<SetStateAction<string>>;
};

export function useStudyInsights({ setErrorText }: UseStudyInsightsParams) {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState<InsightTab>("transcript");
    const [isExpanded, setIsExpanded] = useState(false);

    const [transcript] = useState(() => localStorage.getItem("transcript") ?? "");
    const [summary, setSummary] = useState(() => localStorage.getItem("summarization") ?? "");
    const [highlights, setHighlights] = useState(() => localStorage.getItem("highlights") ?? "");

    useEffect(() => {
        if (!transcript) {
            navigate("/");
        }
    }, [navigate, transcript]);

    useEffect(() => {
        if (!localStorage.getItem("summarization")) {
            void fetchSummary(setSummary, setErrorText);
        }

        if (!localStorage.getItem("highlights")) {
            void fetchHighlights(setHighlights, setErrorText);
        }
    }, [setErrorText]);

    function toggleExpanded() {
        setIsExpanded((current) => !current);
    }

    const activeText =
        activeTab === "transcript"
            ? transcript
            : activeTab === "summary"
              ? summary
              : highlights;

    return {
        activeTab,
        setActiveTab,
        isExpanded,
        toggleExpanded,
        activeText,
    };
}