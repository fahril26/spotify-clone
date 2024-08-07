import Button from "./Button";
import Icon from "./Icon";
import Arrow from "../assets/icons/arrow-down.png";
import { useShowElement } from "../hook/useShow";
import PlayerControls from "./PlayerControls";
import SongTrackInfo from "./SongTrackInfo";

const MusicPlayerMobile = () => {
  const { isShow, handleHidden } = useShowElement(true);
  return (
    <div
      className={`w-full h-screen bg-black fixed z-30 p-4 flex justify-between flex-col transform transition duration-300 ease-in-out ${isShow ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} `}
    >
      <HeaderMusicPlayer handleHiddenPlayer={handleHidden} />
      <SongTrackInfo />
      <PlayerControls />
    </div>
  );
};

export default MusicPlayerMobile;

const HeaderMusicPlayer = ({ handleHiddenPlayer }) => {
  return (
    <header className="md:hidden w-full">
      <div className="flex justify-between items-center">
        <Button onClick={handleHiddenPlayer}>
          <Icon src={Arrow} alt={"hidden-btn"} className={"w-3 "} />
        </Button>
        Playlist Name
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="16px"
          >
            <path
              fill="#ffffff"
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};
