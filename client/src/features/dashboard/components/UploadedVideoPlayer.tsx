import { APP_BACKEND_BASE } from "../../../shared/utils/APP_BACKEND_BASE";

export default function UploadedVideoPlayer() {
    return (
        <video
            className="rounded-3xl row-start-1 w-full max-w-3xl max-h-[500px] object-cover"
            src={`${APP_BACKEND_BASE}/api/v1/getVideo`}
            controls
            preload="metadata"
        />
    );
}