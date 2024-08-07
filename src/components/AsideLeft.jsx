import Button from "./Button";
import Icon from "./Icon";
import LayoutBetween from "./LayoutBetween";
import Navbar from "./Navbar";
import PlaylistIcon from "../assets/icons/playlist.png";
import AddIcon from "../assets/icons/plus.png";
import Collection from "./Collection";
import Arrow from "../assets/icons/arrow-bottom.png";
import SearchIcon from "../assets/icons/search.png";
import { useState } from "react";
import useWindowSizeContext from "../hook/useWindowSizeContext";
import MusicPlayerDekstop from "./MusicPlayerDekstop";

const AsideLeft = () => {
  const [onScroll, setOnscroll] = useState(false);
  const { windowSizeMedium } = useWindowSizeContext();

  const handleScroll = (e) => {
    if (e.target.scrollTop > 0) setOnscroll(true);
    else setOnscroll(false);
  };

  return (
    <aside
      className={`w-3/12 hidden sm:flex flex-col lg:gap-2 bg-secondary lg:bg-transparent overflow-y-hidden justify-between relative`}
    >
      <Navbar />

      {windowSizeMedium ? (
        <MusicPlayerDekstop />
      ) : (
        <div className="wrapper py-5 h-[79%] hidden lg:block  overflow-hidden">
          <header className={`${onScroll ? "shadow-sm shadow-black/40" : ""}`}>
            <LayoutBetween className={"px-5"}>
              <Button
                className={"flex items-center opacity-60 hover:opacity-100"}
              >
                <Icon src={PlaylistIcon} alt={"playlist"} className={"w-5"} />
                <span className="text-base ml-2 font-bold">Your Library</span>
              </Button>

              <div className="flex translate-x-3">
                <Button className={"rounded-btn group"}>
                  <Icon
                    src={AddIcon}
                    alt={"add"}
                    className={"w-5 opacity-60 group-hover:opacity-100"}
                  />
                </Button>
                <Button className={"rounded-btn group"}>
                  <Icon
                    src={Arrow}
                    alt={"add"}
                    className={
                      "w-6 -rotate-90 opacity-60 group-hover:opacity-100"
                    }
                  />
                </Button>
              </div>
            </LayoutBetween>

            <div className="mt-4 p-5 py-2 flex gap-2">
              <Button className={"px-3 py-1 text-sm bg-white/10 rounded-full"}>
                Playlist
              </Button>
              <Button className={"p-3 py-1 text-sm bg-white/10 rounded-full"}>
                Artist
              </Button>
            </div>
          </header>

          <Collection
            className={"overflow-y-auto h-3/4"}
            icon={{ SearchIcon }}
            handleScroll={handleScroll}
          />
        </div>
      )}
    </aside>
  );
};

export default AsideLeft;
