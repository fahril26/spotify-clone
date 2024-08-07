import Button from "../components/Button";
import Icon from "../components/Icon";
import LayoutBetween from "../components/LayoutBetween";
import SearchIcon from "../assets/icons/search.png";
import AddIcon from "../assets/icons/plus.png";
import Collection from "../components/Collection";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import { useShowElement } from "../hook/useShow";
import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSizeContext from "../hook/useWindowSizeContext";

const MyCollection = memo(() => {
  const [positionFromTop, setPositionFromTop] = useState("top-0");
  const [sortBy, setSortBy] = useState("Default");
  const { windowWidth } = useWindowSizeContext();
  const { isShow, handleShow, handleHidden } = useShowElement(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastOffsetY = 0;
    const handleScroll = () => {
      if (window.scrollY > lastOffsetY) setPositionFromTop("-top-[40px]");
      else setPositionFromTop("top-0");

      lastOffsetY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) navigate(-1);
  }, [windowWidth]);

  return (
    <div id="playlist" className="pb-24">
      <Header className={"px-4"}>
        <LayoutBetween>
          <div className="flex items-center">
            <Button className={"rounded-btn bg-cyan-400"}>
              <img src="" alt="" />
            </Button>

            <h1 className="text-base font-semibold ml-2">My Collection</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button>
              <Icon src={SearchIcon} alt={"search"} className={"w-5"} />
            </Button>
            <Button>
              <Icon src={AddIcon} alt={"add"} className={"w-5"} />
            </Button>
          </div>
        </LayoutBetween>
      </Header>

      <div
        className={`p-4 bg-dark fixed w-full h-28 flex items-end shadow-sm shadow-black transition-all duration-300 z-10 ${positionFromTop}`}
      >
        <Button
          className={
            "text-xs rounded-full py-1 px-3 border-[1px] border-white/50"
          }
        >
          Playlist
        </Button>
        <Button
          className={
            "text-xs rounded-full py-1 px-3 border-[1px] border-white/50 ml-2"
          }
        >
          Artist
        </Button>
      </div>

      <Collection handleDrawerShow={handleShow} sortBy={sortBy} />

      <Drawer show={isShow} handleHidden={handleHidden} className={"pt-5"}>
        <div>
          <h3 className="text-sm px-2 font-semibold">Sort by</h3>
        </div>

        <div className="mt-3 flex flex-col">
          <Button
            className={`text-xs px-2 py-3 w-full text-start hover:bg-dark/70 rounded-md ${sortBy === "Default" ? "active-item" : ""}`}
          >
            Default
          </Button>
          <Button
            className={`text-xs px-2 py-3 w-full text-start hover:bg-dark/70 rounded-md ${sortBy === "Alphabetic" ? "active-item" : ""}`}
          >
            Alphabetic
          </Button>

          <div className="w-full flex justify-center mt-2">
            <Button className={"text-[14px] w-20 py-1"} onClick={handleHidden}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
});

MyCollection.displayName = "MyCollection";

export default MyCollection;
