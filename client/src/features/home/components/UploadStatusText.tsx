import UploadLoadingText from "./UploadLoadingText";
import UploadIntroText from "./UploadIntroText";

type UploadStatusTextProps = {
    isLoading: boolean;
};

export default function UploadStatusText({ isLoading }: UploadStatusTextProps) {
    return isLoading ? <UploadLoadingText /> : <UploadIntroText />;
}