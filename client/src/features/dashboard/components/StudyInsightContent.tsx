import LoadingText from "../../../shared/components/LoadingText";

type StudyInsightContentProps = {
    text: string;
};

export default function StudyInsightContent({ text }: StudyInsightContentProps) {
    return (
        <div className="w-full pr-15 relative overflow-y-auto break-words scrollbarEdit">
            {text ? (
                <p className="text-sm text-white/60 text-left leading-6 whitespace-pre-wrap">
                    {text}
                </p>
            ) : (
                <LoadingText />
            )}
        </div>
    );
}