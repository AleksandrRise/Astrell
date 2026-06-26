import { useContext } from "react";

import ErrorMessage from "../../../shared/components/ErrorMessage";
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";

import UploadedVideoPlayer from "./UploadedVideoPlayer";
import StudyInsightsPanel from "./StudyInsightsPanel";
import NotesPreviewCard from "./NotesPreviewCard";
import StudyActionsPanel from "./StudyActionsPanel";

export default function DashboardMain() {

    // States
    const [errorText, setErrorText] = useContext(ErrorMessageContext);

    // Classes
    const mainClasses = ["relative", "p-10", "flex", "w-full", "h-screen", 
        "justify-center", "items-center", "gap-8", "overflow-hidden"].join(" ");

    return (
        <>
            <main className={mainClasses}>
                <div className="grid grid-rows-[auto_2fr] flex-2 size-full gap-4">
                    <UploadedVideoPlayer />
                    <StudyInsightsPanel setErrorText={setErrorText} />
                </div>

                <div className="grid grid-rows-[2fr_1fr] flex-1 size-full gap-6">
                    <NotesPreviewCard />
                    <StudyActionsPanel />
                </div>
            </main>

            {errorText ? <ErrorMessage message={errorText} /> : null}
        </>
    );
}