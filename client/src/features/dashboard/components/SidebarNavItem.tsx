import { useNavigate } from "react-router-dom";

import type { SidebarNavItemConfig } from "../utils/SidebarNavItemConfig";

type SidebarNavItemProps = SidebarNavItemConfig;

export default function SidebarNavItem({
    name,
    icon,
    isActive,
    navigateTo = "/dashboard",
}: SidebarNavItemProps) {
    const navigate = useNavigate();

    function handleClick() {
        if (!isActive) {
            navigate(navigateTo);
        }
    }

    // Classes
    const isActiveClasses = isActive
        ? "text-white/90 shadow-[0_0_0_1px_#333533] bg-linear-to-r from-[#232323]/50 to-white/15 to-60%"
        : "text-white/50 hover:shadow-[0_0_0_1px_#333533]/50 hover:bg-linear-to-r hover:from-[#232323]/35 hover:to-white/10 hover:to-60%";
    const buttonClasses = [
        "flex", "items-center", "gap-3.75", "px-6", "py-2.5", "w-full", "rounded-lg", "lg:justify-center", "xl:justify-start",
        isActive 
            ? "shadow-[0_1px_0_0_#333533_inset]" 
            : "hover:shadow-[0_1px_0_0_#333533_inset]/50 cursor-pointer"
    ].join(" ");

    return (
        <li
            className={isActiveClasses}
        >
            <button
                type="button"
                className={buttonClasses}
                onClick={handleClick}
                aria-current={isActive ? "page" : undefined}
            >
                <img
                    className={`w-7.5 h-7.5 ${isActive ? "opacity-90" : "opacity-50"}`}
                    src={icon}
                    alt=""
                />

                <span className="lg:hidden xl:inline">{name}</span>
            </button>
        </li>
    );
}