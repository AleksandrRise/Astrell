import { useNavigate } from "react-router-dom";

import quizIcon from "/assets/QuizIcon.png";

export default function QuizActionCard() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/quiz");
    }

    // Classes
    const buttonClasses = ["rounded-3xl", "logoGradient-bg", "p-[2px]",
        "flex", "flex-col", "text-start", "justify-center", "items-center",
        "cursor-pointer", "hover:scale-102", "transition"].join(" ");
    const spanClasses1 = ["xl:text-lg", "lg:text-md", "font-semibold", "italic"].join(" ");
    const spanClasses2 = ["xl:text-5xl", "lg:text-4xl", "font-bold", "italic", 
        "bg-clip-text", "text-transparent", "bg-linear-to-l", "from-[#999999]", 
        "to-white", "tracking-wider"].join(" ");

    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={handleClick}
        >
            <div>
                <span className={spanClasses1}>
                    Make a
                </span>

                <div className="flex items-center gap-1">
                    <img className="size-7 -mt-1" src={quizIcon} alt="Quiz Icon" />
                    <span className={spanClasses2}>
                        Quiz
                    </span>
                </div>
            </div>
        </button>
    );
}