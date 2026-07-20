import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BODY, getAssetUrl } from "../sections/helpers";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  category?: string;
  autoPlay?: boolean;
}

export function CustomVideoPlayer({
  src,
  poster,
  title,
  category,
  autoPlay = false,
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);

  // Format seconds to mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimer.current) {
      clearTimeout(hideControlsTimer.current);
    }
    if (isPlaying) {
      hideControlsTimer.current = setTimeout(() => {
        if (!isSeeking && !showSpeedMenu) {
          setShowControls(false);
        }
      }, 2500);
    }
  }, [isPlaying, isSeeking, showSpeedMenu]);

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    };
  }, [isPlaying, resetHideTimer]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setHasPlayedOnce(true);
    }
  };

  // Video Event Handlers
  const handleTimeUpdate = () => {
    if (!videoRef.current || isSeeking) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  // Seek Handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  // Volume Handlers
  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    videoRef.current.muted = newMuteState;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  // Speed Control
  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
    setShowSpeedMenu(false);
  };

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={resetHideTimer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isPlaying) setShowControls(false);
      }}
      className="relative group w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] select-none"
    >
      {/* Background Video Element */}
      <video
        ref={videoRef}
        src={getAssetUrl(src)}
        poster={poster ? getAssetUrl(poster) : undefined}
        autoPlay={autoPlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onClick={togglePlay}
        playsInline
        className="w-full h-full object-contain cursor-pointer"
      />

      {/* Title & Category Top Badge Overlay */}
      <AnimatePresence>
        {(showControls || !isPlaying) && (title || category) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none flex items-center justify-between z-20"
          >
            <div>
              {category && (
                <span
                  className="text-[#A78BFA] text-[10px] sm:text-xs font-semibold uppercase tracking-widest block mb-0.5"
                  style={BODY}
                >
                  {category}
                </span>
              )}
              {title && (
                <h4 className="text-white text-sm sm:text-base font-semibold tracking-tight">
                  {title}
                </h4>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Big Play/Pause Button overlay */}
      <AnimatePresence>
        {(!isPlaying || (isHovered && showControls)) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <button
              onClick={togglePlay}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#8B5CF6]/90 to-[#A78BFA]/90 text-white flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] transition-all duration-300 backdrop-blur-md border border-white/20 cursor-pointer"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <Pause size={28} className="fill-white" />
              ) : (
                <Play size={30} className="fill-white translate-x-0.5" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls Bar */}
      <AnimatePresence>
        {(showControls || !isPlaying) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 flex flex-col gap-2"
          >
            {/* Custom Progress Bar / Seek Bar */}
            <div className="relative group/seeker w-full flex items-center h-4 cursor-pointer">
              {/* Background Track */}
              <div className="w-full h-1.5 group-hover/seeker:h-2 bg-white/20 rounded-full overflow-hidden transition-all duration-200">
                {/* Active Progress */}
                <div
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] relative rounded-full"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#A78BFA] opacity-0 group-hover/seeker:opacity-100 transition-opacity duration-200" />
                </div>
              </div>

              {/* Hidden Input Range for Seeking */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onMouseDown={() => setIsSeeking(true)}
                onMouseUp={() => setIsSeeking(false)}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs pt-1">
              {/* Left Group: Play/Pause, Replay, Time */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                    }
                  }}
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer hidden sm:block"
                  title="Replay"
                >
                  <RotateCcw size={16} />
                </button>

                {/* Volume Controls */}
                <div className="flex items-center gap-2 group/vol relative">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={18} className="text-red-400" />
                    ) : (
                      <Volume2 size={18} />
                    )}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-14 sm:w-20 accent-[#A78BFA] h-1 bg-white/20 rounded-lg cursor-pointer transition-all"
                  />
                </div>

                {/* Time Indicator */}
                <span className="text-white/70 text-xs font-mono tracking-tight" style={BODY}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Right Group: Speed & Fullscreen */}
              <div className="flex items-center gap-2 relative">
                {/* Speed Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                    className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  >
                    {playbackRate}x
                  </button>

                  <AnimatePresence>
                    {showSpeedMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-full right-0 mb-2 bg-[#141414]/95 border border-white/10 backdrop-blur-md rounded-xl p-1.5 shadow-2xl flex flex-col gap-1 z-30"
                      >
                        {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => changeSpeed(rate)}
                            className={`px-3 py-1.5 text-xs font-mono rounded-lg text-left transition-colors cursor-pointer ${
                              playbackRate === rate
                                ? "bg-[#8B5CF6] text-white font-bold"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
