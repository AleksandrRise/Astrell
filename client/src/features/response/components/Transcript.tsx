export default function Transcript() {
    const wrapperClasses = "px-8 py-9.5 font-bold w-100 h-126.25 bg-white/8 rounded-4xl \
    shadow-[0_0_2px_0_rgba(0,149,255,0.75)_inset] backdrop-blur-[100px] overflow-auto \
    "
    const h1Classes = "text-2xl pb-6"
    const pClasses = "text-md text-[#D1F3FF]/80 hyphens-auto"

    return (
        <article className={wrapperClasses}>
            <h1 className={h1Classes}>Transcript</h1>
            <p className={pClasses}>Something lorem ipsum sdfgnsdfn soigfsnoinfisoginsfoi siogfnisgf osfignsfoi fsnio fsnosfinfiosgnsfiogniosfngionsoirngisfiognsoifniogfsnoinfisoginsfoi siogfnisgf osfignsfoi fsnio fs sdfgnsdfn soifgnosfinfiosgnsfiogniosfngionsoirngisfiognsoifniogfsnoinfisoginsfoi siogfnisgf osfignsfoi fsnio fs sdfgnsdfn soifgnosfinfiosgnsfiogniosfngionsoirngisfiognsoifniogfsnoinfisoginsfoi siogfnisgf osfignsfoi fsnio fs sdfgnsdfn soifgnosfinfiosgnsfiogniosfngionsoirngisfiognsoifniogfsnoinfisoginsfoi siogfnisgf osfignsfoi fsnio fs  </p>
        </article>
    )
}