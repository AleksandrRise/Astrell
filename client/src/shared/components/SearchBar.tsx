import { type SetStateAction } from "react";
import type { FeaturesProps } from "../../features/dashboard/utils/FeaturesProps"
import searchIcon from "/assets/Search.png"

type SearchBarProps = {
    features: FeaturesProps[];
    setSearchRes: React.Dispatch<SetStateAction<FeaturesProps[]>>; 
}

export default function SearchBar({ features, setSearchRes}: SearchBarProps) {

    // Searching algorithm
    const handleChange = (value: string) => {
        const results = features.filter((feature) => {
            return (
                value && 
                feature &&
                feature.name &&
                feature.name.toLowerCase().includes(value)
            )
        })

        value ? setSearchRes(results) : setSearchRes(features)
    }

    // Classes
    const imgClasses = "w-5 h-5"
    const inputClasses = "outline-none border-none pl-3.5 text-sm \
        placeholder:text-white/40 font-light"
    const wrapperClasses = "w-full h-11.25 px-3.5 flex items-center \
        shadow-[0_0_0_1px_#333533] stroke-[#333533] bg-white/5 rounded-xl \
        cursor-text focus-within:shadow-[0_0_0_2px_#FFFFFF]/20 transition"

    // Properties
    const altSearch = "Search"
    const inputPlaceholder = "Search..."
    const htmlFor = "searchbar"

    return (
        <label htmlFor={htmlFor} className={wrapperClasses}>
            <img className={imgClasses} src={searchIcon} alt={altSearch} />
            <input className={inputClasses} 
                type="text" 
                name={htmlFor} 
                id={htmlFor} 
                placeholder={inputPlaceholder} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </label>
    )
}