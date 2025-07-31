import Features from "./Features";
import LogoSection from "./LogoSection";
import SearchBar from "../../../shared/components/SearchBar";
import Other from "./Other"
import Profile from "./Profile"


export default function Aside() {
    // Classes
    const asideClasses = "text-white w-85 h-screen bg-blackBG border-r-3 \
    border-white/5 px-8.5"
    const divClasses = "bg-white/5 h-0.5 w-full"

    return (
        <aside className={asideClasses}>
            <LogoSection />

            <div className={divClasses}></div>
            
            <SearchBar />

            <Features>
                <Features.Feature />
            </Features>

            <div className={divClasses}></div>

            <Other>
                <Other.Feature />
            </Other>
            
            <Profile />
        </aside>
    )
}