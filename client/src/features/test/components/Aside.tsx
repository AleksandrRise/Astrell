import Features from "./Features";
import LogoSection from "./LogoSection";
import SearchBar from "../../../shared/components/SearchBar";
import Other from "./Other"
import Profile from "./Profile"
import dashboardIcon from "../assets/DashboardIcon.png"
import chatIcon from "../assets/ChatIcon.png"
import examIcon from "../assets/ExamIcon.png"
import historyIcon from "../assets/HistoryIcon.png"


export default function Aside() {

    const features = [
        { name: "Dashboard", icon: dashboardIcon, isActive: true},
        { name: "History", icon: historyIcon, isActive: false},
        { name: "Exam Builder", icon: examIcon, isActive: false},
        { name: "Chat", icon: chatIcon, isActive: false},
    ]

    // Classes
    const asideClasses = "text-white w-85 h-screen bg-blackBG border-r-3 \
    border-white/5 px-8.5"
    const divClasses = "bg-white/5 h-0.5 w-full mb-5.5"

    return (
        <aside className={asideClasses}>
            <LogoSection />

            <div className={divClasses}></div>
            
            <SearchBar />

            <Features>
                {features.map(feature => 
                    <Features.Feature 
                        name={feature.name} 
                        icon={feature.icon} 
                        isActive={feature.isActive}
                    />
                )}
            </Features>

            <div className={divClasses}></div>

            <Other>
                <Other.Feature name="Settings" icon="" isActive={false} />
            </Other>
            
            <Profile />
        </aside>
    )
}