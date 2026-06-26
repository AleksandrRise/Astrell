import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE";

const VideoPlayer = () => {

    // Classes
    const videoClasses =
        "rounded-3xl row-start-1 w-full max-w-3xl max-h-[500px] object-cover";

    return (
        <video
            className={videoClasses}
            src={`${APP_BACKEND_BASE}/api/v1/getVideo`}
            controls
            preload="metadata"
        />
    );
};

export default VideoPlayer;