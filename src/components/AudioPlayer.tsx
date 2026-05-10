import { Music } from 'lucide-react';

export default function AudioPlayer() {
  // Example lo-fi track. User can replace this URL or use a local file like '/music.mp3'
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] p-2 rounded-xl shadow-xl">
      <div className="flex items-center justify-center w-8 h-8 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)]">
        <Music className="w-4 h-4" />
      </div>
      <audio 
        src={audioUrl} 
        controls 
        loop 
        preload="none"
        className="h-8 w-48"
        style={{ filter: 'invert(0.9) hue-rotate(180deg)' }} // Quick hack to make default audio player look "dark"
      />
    </div>
  );
}
