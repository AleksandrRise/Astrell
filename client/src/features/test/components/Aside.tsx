import Features from "./Features";
import LogoSection from "./LogoSection";
import SearchBar from "../../../shared/components/SearchBar";
import Profile from "./Profile"
import dashboardIcon from "../assets/DashboardIcon.png"
import chatIcon from "../assets/ChatIcon.png"
import examIcon from "../assets/ExamIcon.png"
import historyIcon from "../assets/HistoryIcon.png"
import settingsIcon from "../assets/SettingsIcon.png"
import supportIcon from "../assets/SupportIcon.png"
import type { FeaturesProps } from "../utils/FeaturesProps"
import { useState } from "react";


export default function Aside() {

    // Features arrays
    const features = [
        { name: "Dashboard", icon: dashboardIcon, isActive: true},
        { name: "History", icon: historyIcon, isActive: false},
        { name: "Exam Builder", icon: examIcon, isActive: false},
        { name: "Chat", icon: chatIcon, isActive: false},
    ]

    const others = [
        { name: "Settings", icon: settingsIcon, isActive: false},
        { name: "Support", icon: supportIcon, isActive: false},
    ]

    // States
    const [ searchRes, setSearchRes ] = useState<FeaturesProps[]>(features)

    // Classes
    const asideClasses = "text-white w-85 h-screen bg-blackBG border-r-3 \
    border-white/5 px-8.5 flex flex-col"
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