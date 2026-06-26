type StudyInsightTabProps = {
    name: string;
    icon: string;
    alt: string;
    isActive: boolean;
    onClick: () => void;
};

export default function StudyInsightTab({
    name,
    icon,
    alt,
    isActive,
    onClick,
}: StudyInsightTabProps) {
    return (
        <button
            type="button"
            className={`flex lg:gap-1 xl:gap-2.5 items-center cursor-pointer ${
                isActive ? "opacity-90" : "opacity-50"
            }`}
            onClick={onClick}
            aria-pressed={isActive}
        >
            <img className="lg:size-5 xl:size-7.5" src={icon} alt={alt} />
            <span className="lg:text-lg xl:text-xl font-bold font-lato">
                {name}
            </span>
        </button>
    );
}