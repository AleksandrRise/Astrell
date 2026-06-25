export default function UploadIntroText() {
    return (
        <div className="text-white text-center tracking-wider -mt-20">
            <h3 className="text-white/80 text-base fadeIn">
                Hi there! I am <span className="text-white">Astrell.</span>
            </h3>

            <p className="text-2xl mt-5 fadeIn">
                Drop your lecture video here, so we<br />
                can work on it together.
            </p>

            <p className="text-md text-white/50 fadeIn mt-5">
                Currently limited to 1-2 minutes.
            </p>
        </div>
    );
}