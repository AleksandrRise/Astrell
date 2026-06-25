import { useContext, useState } from "react";

import Navbar from "../shared/components/Navbar";
import Info from "../shared/components/Info";
import ErrorMessage from "../shared/components/ErrorMessage";
import UploadHero from "../features/home/components/UploadHero";
import UploadStatusText from "../features/home/components/UploadStatusText";
import { ErrorMessageContext } from "../shared/utils/ErrorMessageContext";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorText] = useContext(ErrorMessageContext);

    return (
        <main className="w-full h-screen hero-bg flex flex-col pb-30 relative">
            <Navbar>
                <Navbar.MenuBtn />
                <Navbar.Info>
                <Info.HintBlock />
                </Navbar.Info>
            </Navbar>

            <UploadHero setIsLoading={setIsLoading}>
                <UploadStatusText isLoading={isLoading} />
            </UploadHero>

            {errorText ? <ErrorMessage message={errorText} /> : null}
        </main>
    );
}