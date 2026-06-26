import { useState } from "react";

import SearchBar from "../../../shared/components/SearchBar";
import SidebarBrand from "./SidebarBrand";
import SidebarNavSection from "./SidebarNavSection";
import SidebarNavItem from "./SidebarNavItem";
import SidebarProfileButton from "./SidebarProfileButton";

import dashboardIcon from "/assets/DashboardIcon.png";
import settingsIcon from "/assets/SettingsIcon.png";
import supportIcon from "/assets/SupportIcon.png";
import lectureIcon from "/assets/BookmarkIcon.png";

import type { SidebarNavItemConfig } from "../utils/SidebarNavItemConfig";

const MAIN_NAV_ITEMS: SidebarNavItemConfig[] = [
    { name: "Dashboard", icon: dashboardIcon, isActive: true },
    { name: "New Lecture", icon: lectureIcon, isActive: false, navigateTo: "/" },
];

const SECONDARY_NAV_ITEMS: SidebarNavItemConfig[] = [
    { name: "Settings (n/a)", icon: settingsIcon, isActive: false },
    { name: "Support (n/a)", icon: supportIcon, isActive: false },
];

export default function DashboardSidebar() {

    // States
    const [filteredNavItems, setFilteredNavItems] =
        useState<SidebarNavItemConfig[]>(MAIN_NAV_ITEMS);

    // Classes
    const asideClasses = "text-white xl:min-w-85 h-screen bg-blackBG border-r-3 border-white/5 xl:px-8.5 lg:px-4 flex flex-col lg:w-40";

    return (
        <aside className={asideClasses}>
            <SidebarBrand />

            <div className="bg-white/5 h-0.5 w-full mb-5.5" />

            <SearchBar
                features={MAIN_NAV_ITEMS}
                setSearchRes={setFilteredNavItems}
            />

            <SidebarNavSection title="Features">
                {filteredNavItems.map((item) => (
                    <SidebarNavItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        isActive={item.isActive}
                        navigateTo={item.navigateTo}
                    />
                ))}
            </SidebarNavSection>

            <div className="bg-white/5 h-0.5 w-full mb-5.5 mt-auto" />

            <SidebarNavSection>
                {SECONDARY_NAV_ITEMS.map((item) => (
                    <SidebarNavItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        isActive={item.isActive}
                        navigateTo={item.navigateTo}
                    />
                ))}
            </SidebarNavSection>

            <SidebarProfileButton />
        </aside>
    );
}