import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

export default function PremiumAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('0:00');
  const [durationStr, setDurationStr] = useState('0:00');
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Example track details
  const audioUrl = "/audio.mp3";
  const trackName = "Audio Favorito";
  const artistName = "Mi Selección";
  const coverArt = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val / 100;
      if (val > 0 && isMuted) toggleMute();
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    
    // We always update the time string so it reflects the audio's time
    // But while dragging, the visual progress bar is controlled by the user
    if (!isDragging) {
      setCurrentTimeStr(formatTime(current));
      if (total) {
        setProgress((current / total) * 100);
        setDurationStr(formatTime(total));
      }
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    setProgress(newVal);
    if (audioRef.current && audioRef.current.duration) {
      const seekTo = (newVal / 100) * audioRef.current.duration;
      setCurrentTimeStr(formatTime(seekTo));
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLInputElement>) => {
    setIsDragging(false);
    if (!audioRef.current || !audioRef.current.duration) return;
    const target = e.target as HTMLInputElement;
    const seekTo = (Number(target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTo;
  };

  // Dummy functions for next/prev
  const handleSkip = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setProgress(0);
    if (!isPlaying) togglePlay();
  };

  return (
    <div className="w-full mt-8 mx-auto md:mx-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-sm hover:border-[var(--color-border-hover)] transition-colors select-none">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        loop 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
      
      {/* Left: Cover Art & Info */}
      <div className="flex items-center gap-3 w-full md:w-1/4 min-w-0">
        <div className="relative w-12 h-12 rounded bg-[var(--color-bg)] overflow-hidden shrink-0">
          <img src={coverArt} alt="Cover Art" className={`w-full h-full object-cover transition-all duration-1000 ${isPlaying ? 'scale-110 opacity-100' : 'scale-100 opacity-80'}`} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-[var(--color-text-main)] truncate hover:underline cursor-pointer">{trackName}</span>
          <span className="text-xs text-[var(--color-text-muted)] truncate hover:underline cursor-pointer">{artistName}</span>
        </div>
      </div>

      {/* Center: Controls & Scrubber */}
      <div className="flex flex-col items-center justify-center w-full md:w-2/4 gap-1.5">
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" title="Shuffle">
            <Shuffle className="w-4 h-4" />
          </button>
          <button onClick={handleSkip} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" title="Previous">
            <SkipBack className="w-5 h-5 fill-current" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-text-main)] text-[var(--color-bg)] hover:scale-105 active:scale-95 transition-transform"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <button onClick={handleSkip} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" title="Next">
            <SkipForward className="w-5 h-5 fill-current" />
          </button>
          <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" title="Repeat">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[10px] font-mono text-[var(--color-text-muted)] w-8 text-right">{currentTimeStr}</span>
          
          <div className="relative w-full h-1 bg-[var(--color-bg)] rounded-full group flex items-center">
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="0.1"
              value={progress} 
              onChange={handleSeekChange}
              onPointerDown={() => setIsDragging(true)}
              onPointerUp={handlePointerUp}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div 
              className="absolute top-0 left-0 h-full bg-[var(--color-text-main)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors pointer-events-none"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--color-text-main)] rounded-full opacity-0 group-hover:opacity-100 shadow pointer-events-none translate-x-1/2" />
            </div>
          </div>

          <span className="text-[10px] font-mono text-[var(--color-text-muted)] w-8">{durationStr}</span>
        </div>
      </div>

      {/* Right: Volume */}
      <div className="hidden md:flex items-center justify-end gap-2 w-1/4">
        <button onClick={toggleMute} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">
          {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <div className="relative w-20 h-1 bg-[var(--color-bg)] rounded-full group flex items-center">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={isMuted ? 0 : volume} 
            onChange={handleVolumeChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div 
            className="absolute top-0 left-0 h-full bg-[var(--color-text-main)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors pointer-events-none"
            style={{ width: `${isMuted ? 0 : volume}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--color-text-main)] rounded-full opacity-0 group-hover:opacity-100 shadow pointer-events-none translate-x-1/2" />
          </div>
        </div>
      </div>

    </div>
  );
}
