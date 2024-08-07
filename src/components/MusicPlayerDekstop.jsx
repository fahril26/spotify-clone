import useWindowSizeContext from "../hook/useWindowSizeContext";
import Button from "./Button";
import Icon from "./Icon";
import PlayerControls from "./PlayerControls";
import VolumeControls from "./VolumeControls";
import QueueIcon from "../assets/icons/queue.png";
import NowPlayingIcon from "../assets/icons/now-playing.png";
import SongTrackInfo from "./SongTrackInfo";

const MusicPlayerDekstop = () => {
  const { windowSizeLarge } = useWindowSizeContext();
  return (
    <div
      className={`w-full sm:bg-inherit sm:h-full sm:translate-y-80 lg:h-[14vh] lg:px-4 lg:translate-y-0 lg:fixed lg:bottom-0`}
    >
      <div className="w-full md:py-0 flex flex-col lg:flex-row justify-between items-center">
        <SongTrackInfo />
        <PlayerControls />
        {windowSizeLarge && <AdditionalControls />}
      </div>
    </div>
  );
};

export default MusicPlayerDekstop;

const AdditionalControls = () => {
  return (
    <div className="flex items-center gap-4 ">
      <Button tooltipText={"Now playing view"}>
        <Icon src={NowPlayingIcon} alt={"now-playing"} className={"w-[18px]"} />
      </Button>
      <Button tooltipText={"Queue"}>
        <Icon src={QueueIcon} alt={"queue-list"} className={"w-5"} />
      </Button>

      <VolumeControls />
    </div>
  );
};
