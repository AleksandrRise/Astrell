import StudyInsightTab from "./StudyInsightTab";
import type { InsightTab } from "../utils/useStudyInsights";

import transcriptIcon from "/assets/TranscriptIcon.png";
import summaryIcon from "/assets/SummaryIcon.png";
import highlightsIcon from "/assets/HighlightsIcon.png";

type StudyInsightTabsProps = {
    activeTab: InsightTab;
    onTabChange: (tab: InsightTab) => void;
};

const INSIGHT_TABS = [
    {
        key: "transcript",
        icon: transcriptIcon,
        alt: "Transcript",
        name: "Transcription",
    },
    {
        key: "summary",
        icon: summaryIcon,
        alt: "Summary",
        name: "Summary",
    },
    {
        key: "highlights",
        icon: highlightsIcon,
        alt: "Highlights",
        name: "Highlights",
    },
] satisfies {
    key: InsightTab;
    icon: string;
    alt: string;
    name: string;
}[];

export default function StudyInsightTabs({
    activeTab,
    onTabChange,
}: StudyInsightTabsProps) {

    // Determine the position of the underline based on the active tab
    const underlinePosition =
        activeTab === "transcript"
            ? "left-0"
            : activeTab === "summary"
              ? "lg:left-40.5 xl:left-48"
              : "lg:left-77 xl:left-90.5";

    // Classes
    const divClasses1 = ["flex", "gap-11", "relative", "pb-4", "w-full"].join(" ");
    const divClasses2 = ["h-[2px]", "bg-white/70", "rounded-t-lg", "absolute", 
        "bottom-0", "shadow-[0_0_12px_2px_#FFFFFF]/25", "transition-all", {underlinePosition}].join(" ");

    return (
        <div className={divClasses1}>
            {INSIGHT_TABS.map((tab) => (
                <StudyInsightTab
                    key={tab.key}
                    name={tab.name}
                    icon={tab.icon}
                    alt={tab.alt}
                    isActive={activeTab === tab.key}
                    onClick={() => onTabChange(tab.key)}
                />
            ))}

            <div
                className={divClasses2}
            />
        </div>
    );
}