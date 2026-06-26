import type { Dispatch, SetStateAction } from "react";

import StudyInsightTabs from "./StudyInsightTabs";
import StudyInsightContent from "./StudyInsightContent";
import { useStudyInsights } from "../utils/useStudyInsights";

import enlargeIcon from "/assets/EnlargeIcon.png";

type StudyInsightsPanelProps = {
    setErrorText: Dispatch<SetStateAction<string>>;
};

export default function StudyInsightsPanel({
    setErrorText,
}: StudyInsightsPanelProps) {
    const {
        activeTab,
        setActiveTab,
        isExpanded,
        toggleExpanded,
        activeText,
    } = useStudyInsights({ setErrorText });

    // Classes
    const articleClasses = ["size-full", "z-1", "rounded-3xl", "row-start-2", "p-px",
        "bg-gradient-to-tl", "from-[#333333]", "from-[75%]", "to-[#999999]",
        "to-[100%]", "min-h-0",
        isExpanded ? "absolute inset-0" : "relative",
    ].join(" ");
    const divClasses = ["bg-blackBG", "rounded-3xl", "size-full", "xl:pl-12",
        "xl:pr-15", "py-8", "flex", "flex-col", "lg:px-5"].join(" ");

    return (
        <article
            className={articleClasses}
        >
            <div className={divClasses}>
                <button
                    type="button"
                    className="opacity-30 absolute right-5 top-5 size-5 cursor-pointer"
                    onClick={toggleExpanded}
                    aria-label={isExpanded ? "Shrink insights panel" : "Expand insights panel"}
                >
                    <img src={enlargeIcon} alt="Enlarge Icon" />
                </button>

                <StudyInsightTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="mb-4 w-19/20 h-px bg-white/5" />

                <StudyInsightContent text={activeText} />
            </div>
        </article>
    );
}