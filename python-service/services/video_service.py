from moviepy.editor import VideoFileClip

from config import Config


class VideoService:
    def __init__(self):
        self.video_path = Config.VIDEO_PATH
        self.audio_path = Config.AUDIO_PATH

    def save_video(self, video_file):
        video_file.save(self.video_path)
        return self.video_path

    def extract_audio(self, video_path):
        video = VideoFileClip(video_path)

        try:
            video.audio.write_audiofile(self.audio_path)
            return self.audio_path
        finally:
            video.close()