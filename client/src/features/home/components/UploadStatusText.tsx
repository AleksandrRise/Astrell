import TextLoading from "./UploadLoadingText";
import TextOriginal from "./UploadIntroText";

type TextProps = {
    isLoading: boolean;
}

export default function Text({ isLoading }: TextProps) {


    return (
        (isLoading 
            ? <Text.TextLoading />
            : <Text.TextOriginal />
        )
    )
}

Text.TextOriginal = TextOriginal
Text.TextLoading = TextLoading