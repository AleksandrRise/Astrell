import searchIcon from "../../assets/Search.png"

export default function SearchBar() {
    // Classes
    const altSearch = "Search"
    const imgClasses = "w-5 h-5"
    const inputPlaceholder = "Search..."
    const inputClasses = "outline-none border-none ml-3.5 text-sm \
        placeholder:text-white/40 font-light"
    const wrapperClasses = "w-full h-11.25 px-3.5 flex items-center mt-5.5 \
        shadow-[0_0_0_1px_#333533] stroke-[#333533] bg-white/5 rounded-xl \
        cursor-text"
    const htmlFor = "searchbar"

    return (
        <label htmlFor={htmlFor} className={wrapperClasses}>
            <img className={imgClasses} src={searchIcon} alt={altSearch} />
            <input className={inputClasses} type="text" name={htmlFor} id={htmlFor} placeholder={inputPlaceholder} />
        </label>
    )
}