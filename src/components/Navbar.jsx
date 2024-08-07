import NavList from "./NavList";
import HomeIcon from "../assets/icons/home.png";
import SearchIcon from "../assets/icons/search.png";
import PlaylistIcon from "../assets/icons/playlist.png";
import { memo } from "react";
import { setKeyHistory } from "../fileFunction";

const Navbar = memo(({ className }) => {
  return (
    <div
      className={`${className || ""} fixed bottom-0 w-full z-10 bg-gradient-to-t from-black/100 to-black/90 sm:block sm:static sm:bg-secondary sm:from-inherit sm:px-3 sm:py-3 lg:rounded-md lg:px-5 lg:py-4 lg:h-[115px] lg:bg-dark `}
      id="navbar"
    >
      <nav className="h-full">
        <ul className="flex justify-evenly h-full sm:start-0 sm:flex-col">
          <NavList
            icon={HomeIcon}
            text={"Home"}
            path={"/"}
            onClick={setKeyHistory}
          />
          <NavList
            icon={SearchIcon}
            text={"Search"}
            path={"/search"}
            onClick={setKeyHistory}
          />
          <NavList
            icon={PlaylistIcon}
            text={"My Colletion"}
            path={"/my-collection"}
            className={"lg:hidden"}
            onClick={setKeyHistory}
          />
        </ul>
      </nav>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
