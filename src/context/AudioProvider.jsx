import { useRef, createContext, useState, useEffect } from "react";
import VolumeHighIcon from "../assets/icons/volume-high-solid.svg";
import VolumeMuteIcon from "../assets/icons/volume-xmark-solid.svg";

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeState, setVolumeState] = useState({
    volumeValue: 1,
    volumeIcon: VolumeHighIcon,
    isMuted: false,
  });

  const handleTogglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume) => {
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleVolume = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeState((value) => ({
      ...value,
      volumeValue: newVolume,
      isMuted: newVolume == 0 ? true : false,
    }));

    handleVolumeChange(newVolume);
  };

  const changeVolumeIcon = () => {
    if (!volumeState.isMuted)
      setVolumeState((value) => ({ ...value, volumeIcon: VolumeHighIcon }));
    else setVolumeState((value) => ({ ...value, volumeIcon: VolumeMuteIcon }));
  };

  useEffect(() => {
    const handleMute = () => {
      let newVolume = audioRef.current.volume;
      if (volumeState.isMuted) {
        setVolumeState((value) => ({ ...value, volumeValue: 0 }));
        audioRef.current.muted = true;
      } else {
        if (newVolume === 0) {
          newVolume = 1;
          handleVolumeChange(newVolume);
        }

        setVolumeState((value) => ({
          ...value,
          volumeValue: newVolume,
        }));
        audioRef.current.muted = false;
      }
    };

    handleMute();
    changeVolumeIcon();
  }, [volumeState.isMuted]);

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        currentTime,
        isPlaying,
        setIsPlaying,
        setCurrentTime,
        handleTogglePlay,
        handleVolume,
        volumeState,
        setVolumeState,
      }}
    >
      <audio controls ref={audioRef} className="hidden">
        <source
          src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3"
          type="audio/mp3"
        />
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

AudioProvider.displayName = "AudioProvider";

export default AudioProvider;
