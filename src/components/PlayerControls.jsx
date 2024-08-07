import { useState, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";
import PlayIcon from "../assets/icons/play-button.png";
import PauseIcon from "../assets/icons/pause-button.png";
import NextIcon from "../assets/icons/next-button.png";
import SuffleIcon from "../assets/icons/suffle.png";
import SuffleActiveIcon from "../assets/icons/suffle-active.png";
import TrackTitle from "./TrackTitle";
import { useAudioContext } from "../hook/useAudioContext";
import useWindowSizeContext from "../hook/useWindowSizeContext";
import { memo } from "react";

const PlayerControls = memo(() => {
  const [isDragging, setIsDragging] = useState(false);
  const [suffleActive, setSuffleActive] = useState(false);
  const { windowSizeMedium } = useWindowSizeContext();
  const {
    audioRef,
    currentTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    handleTogglePlay,
  } = useAudioContext();
  const toggleProps = {
    src: isPlaying ? PauseIcon : PlayIcon,
    alt: isPlaying ? "pause-toggle" : "playing-toggle",
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMouseUp = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
    setIsDragging(false);
  };

  const handleTimeChange = (e) => setCurrentTime(e.target.value);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setCurrentTime(audio.duration);
    const handleEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };

    if (!isDragging) audio?.addEventListener("timeupdate", updateTime);
    audio?.addEventListener("ended", handleEnded);
    audio?.addEventListener("durationChange", updateDuration);

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
      audio?.removeEventListener("durationChange", updateDuration);
      audio?.removeEventListener("onended", handleEnded);
    };
  }, [audioRef?.current?.currentTime]);

  return (
    <div className="w-full lg:w-[40%] mt-3 h-full flex flex-col">
      <TrackTitle className={"hidden mb-5 px-1"} />
      <div className="w-full mb-3 px-1 flex items-center justify-between sm:justify-evenly lg:justify-center gap-6 order-2 lg:order-none ">
        {!windowSizeMedium && (
          <Button
            onClick={() => setSuffleActive((value) => !value)}
            className={"relative block"}
          >
            <Icon
              src={suffleActive ? SuffleActiveIcon : SuffleIcon}
              alt={"suffle"}
              className={"w-[1.3rem] h-[1.3rem]"}
            />
            {suffleActive && (
              <span className="block w-1 h-1 bg-green-600 rounded-full absolute left-1/2 -translate-x-1/2"></span>
            )}
          </Button>
        )}
        <Button>
          <Icon
            src={NextIcon}
            alt={"prev-track"}
            className={"w-5 h-5 rotate-180"}
          />
        </Button>

        <Button onClick={handleTogglePlay}>
          <Icon
            src={toggleProps.src}
            alt={toggleProps.alt}
            className={"w-9 h-9"}
          />
        </Button>

        <Button>
          <Icon src={NextIcon} alt={"next-track"} className={"w-5 h-5"} />
        </Button>

        {!windowSizeMedium && (
          <Button className={"block"}>
            <Icon src={NextIcon} alt={"next-track"} className={"w-5 h-5"} />
          </Button>
        )}
      </div>

      <div className="w-full flex items-center gap-3 mb-1 lg:mb-0">
        <div className="duration hidden lg:block">
          {formatTime(currentTime)}
        </div>
        <div className="w-full">
          <label className="flex items-center">
            <input
              type="range"
              min={0}
              max={30}
              step={0.1}
              className="w-full h-1 accent-green-400 cursor-pointer transition-all duration-200"
              onChange={handleTimeChange}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={handleMouseUp}
              value={currentTime}
            />
          </label>
        </div>
        <div className="duration hidden lg:block">0:30</div>
      </div>
      <DurationLayoutBelow funcFormatTime={() => formatTime(currentTime)} />
    </div>
  );
});

const DurationLayoutBelow = ({ funcFormatTime }) => {
  return (
    <div className="flex justify-between px-1 lg:hidden">
      <div className="duration">{funcFormatTime()}</div>
      <div className="duration">0:30</div>
    </div>
  );
};

PlayerControls.displayName = "PlayerControls";

export default PlayerControls;
