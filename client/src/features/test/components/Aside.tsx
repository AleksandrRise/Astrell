import Features from "./Features";
import LogoSection from "./LogoSection";
import SearchBar from "./SearchBar";
import Other from "./Other"
import Profile from "./Profile"


export default function Aside() {
    // Classes
    const asideClasses = "text-white"

    return (
        <aside className={asideClasses}>
            <LogoSection />

            <div></div>
            
            <SearchBar />

            <Features>
                <Features.Feature />
            </Features>

            <div></div>

            <Other>
                <Other.Feature />
            </Other>
            
            <Profile />
        </aside>
    )
}