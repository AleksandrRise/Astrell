import type { ReactNode, Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import imgSrc from "/assets/aithinkingball.png";
import VideoDropzone from "./VideoDropzone";
import UploadStatusText from "./UploadStatusText";
import { ErrorMessageContext } from "../../../shared/utils/ErrorMessageContext";
import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE";

function getUploadErrorMessage(error: unknown) {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.error || error.message || "Upload failed.";
    }

    if (error instanceof Error) {
        return error.message;
    }

    return "Upload failed.";
}

type UploadHeroProps = {
  children: ReactNode;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

function UploadHero({ children, setIsLoading }: UploadHeroProps) {
    const MAX_FILE_SIZE_MB = 50;
    const maxFileSize = MAX_FILE_SIZE_MB * 1024 * 1024;

    const [, setErrorText] = useContext(ErrorMessageContext);
    const navigate = useNavigate();

    async function handleFileDrop(file: File) {
        if (!file.type.startsWith("video/")) {
            setErrorText("Please upload a video file.");
            return;
        }

        if (file.size > maxFileSize) {
            setErrorText(`Video must be smaller than ${MAX_FILE_SIZE_MB}MB.`);
            return;
        }

        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                `${APP_BACKEND_BASE}/api/v1/uploadVideo`,
                formData
            );

            const transcript =
                typeof response.data === "string"
                ? response.data
                : response.data?.transcript;

            if (!transcript) {
                throw new Error("Transcript was not found.");
            }

            localStorage.setItem("transcript", transcript);
            localStorage.removeItem("summarization");
            localStorage.removeItem("highlights");

            navigate("/dashboard");
        } catch (error) {
            setErrorText(getUploadErrorMessage(error));
        } finally {
            setIsLoading(false);
        }
    } 

    return (
        <section className="m-auto">
            <VideoDropzone onFileDrop={handleFileDrop} />

            <figure className="zoomIn">
                <img
                    className="aiball-animation"
                    width={450}
                    height={450}
                    src={imgSrc}
                    alt="AI thinking animation"
                    decoding="async"
                />
            </figure>

            {children}
        </section>
    )
}

UploadHero.Text = UploadStatusText;

export default UploadHero;