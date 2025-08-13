import Features from "./Features";
import LogoSection from "./LogoSection";
import SearchBar from "../../../shared/components/SearchBar";
import Profile from "./Profile"
import dashboardIcon from "../assets/DashboardIcon.png"
import settingsIcon from "../assets/SettingsIcon.png"
import supportIcon from "../assets/SupportIcon.png"
import lectureIcon from "../assets/BookmarkIcon.png"
import type { FeaturesProps } from "../utils/FeaturesProps"
import { useState } from "react";


export default function Aside() {


    // Features arrays
    const features = [
        { name: "Dashboard", icon: dashboardIcon, isActive: true},
        { name: "New Lecture", icon: lectureIcon, isActive: false, navigateTo: "/"},
    ]

    const others = [
        { name: "Settings (n/a)", icon: settingsIcon, isActive: false},
        { name: "Support (n/a)", icon: supportIcon, isActive: false},
    ]

    // States
    const [ searchRes, setSearchRes ] = useState<FeaturesProps[]>(features)

    // Classes
    const asideClasses = "text-white xl:min-w-85 h-screen bg-blackBG border-r-3 \
    border-white/5 xl:px-8.5 lg:px-4 flex flex-col lg:w-40"
    const divClasses = "bg-white/5 h-0.5 w-full mb-5.5"
    const h2Classes = "tracking-wide text-white/60 text-base font-bold font-lato mt-9.5 ml-2"

    return (
        <aside className={asideClasses}>
            <LogoSection />

            <div className={divClasses}></div>
            
            <SearchBar features={features} setSearchRes={setSearchRes} />

            <Features>
                <h2 className={h2Classes}>Features</h2>

                {searchRes.map((featureEl, index) => 
                    <Features.Feature 
                        name={featureEl.name} 
                        icon={featureEl.icon} 
                        isActive={featureEl.isActive}
                        navigateTo={featureEl.navigateTo}
                        key={index}
                    />
                )}
            </Features>

            <div className={divClasses + " mt-auto"}></div>

            <Features>
                {others.map((other, index) => 
                    <Features.Feature
                        name={other.name}
                        icon={other.icon} 
                        isActive={other.isActive}
                        key={index}
                    />                     
                )}
            </Features>
            
            <Profile />
        </aside>
    )
}