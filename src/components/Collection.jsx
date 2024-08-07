import Button from "../components/Button";
import LayoutBetween from "./LayoutBetween";
import ListCollection from "./ListCollection";
import Icon from "./Icon";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuTitle,
  DropdownMultipleMenu,
  DropdownToggle,
} from "./Dropdown";
import SearchingComponent from "./SearchingComponent";
import { useState } from "react";
import ListIcon from "../assets/icons/list.png";
import ArrowIcon from "../assets/icons/arrow-bottom.png";
import AddIcon from "../assets/icons/plus.png";
import CollectionIcon from "../assets/icons/collection.png";
import { useEffect } from "react";
import { memo } from "react";
import useWindowSizeContext from "../hook/useWindowSizeContext";
import { useShowElement } from "../hook/useShow";

const Collection = memo(
  ({ icon, className, handleScroll, handleDrawerShow, sortBy }) => {
    const { isShow, handleShow, handleHidden } = useShowElement(false);
    const [listViewColumn, setListViewColumn] = useState(false);
    const [opacity, setOpacity] = useState(null);
    const { windowSizeLarge } = useWindowSizeContext();

    const handleShowAnimation = () => {
      setOpacity("opacity-0");

      const timerShow = setTimeout(() => {
        setOpacity("opacity-100");
      }, 500);

      return () => clearTimeout(timerShow);
    };

    const toggleChangeListView = () => {
      const timerState = setTimeout(() => {
        setListViewColumn((prev) => !prev);
      }, 500);

      handleShowAnimation();
      return () => clearTimeout(timerState);
    };

    const handleChangeListView = (display) => {
      if (display === "list") setListViewColumn(false);
      else setListViewColumn(true);
    };

    useEffect(() => {
      const hanldeHiddenSearch = (e) => {
        const searchComponent = document.querySelector("#search");
        const isClickInsideSearch = searchComponent.contains(e.target);

        if (
          !isClickInsideSearch &&
          !e.target.classList.contains("search-icon") &&
          !e.target.classList.contains("search-btn")
        )
          handleHidden();
      };

      // get colection component
      const collectionElement = document.querySelector("#playlist");

      collectionElement.addEventListener("scroll", handleScroll);
      window.addEventListener("click", hanldeHiddenSearch);

      return () => {
        window.removeEventListener("click", hanldeHiddenSearch);
        collectionElement.removeEventListener("scroll", handleScroll);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        className={`collection px-4 pt-[60px] lg:pl-5 lg:pr-1 lg:pt-0  ${className || ""}`}
        id="playlist"
      >
        <LayoutBetween className={"py-2 lg:py-0 lg:relative"}>
          {windowSizeLarge ? (
            /* dekstop */
            <Button
              className={`search-btn hidden lg:flex rounded-btn group absolute ${isShow ? "z-0" : "z-10"} `}
              onClick={handleShow}
            >
              <Icon
                src={icon?.SearchIcon}
                alt={"search"}
                id={"search-icon"}
                className={"search-icon w-5 opacity-60"}
              />
            </Button>
          ) : (
            /* mobile */
            <Button
              className={"flex items-center lg:hidden"}
              onClick={handleDrawerShow}
            >
              <div className="flex w-4">
                <Icon src={ArrowIcon} alt={"arrow-bottom"} />
                <Icon
                  src={ArrowIcon}
                  alt={"arrow-top"}
                  className={"rotate-180 -translate-x-2"}
                />
              </div>

              <span className="text-xs translate-x-3">{sortBy}</span>
            </Button>
          )}

          {windowSizeLarge ? (
            /* dekstop */
            <Dropdown
              className={"hidden lg:flex"}
              defaultItemActive={1}
              multipleMenu={true}
            >
              <DropdownToggle
                className={"flex justify-end bg-transparent px-0"}
              >
                <Icon src={ListIcon} alt={"list"} className={"w-4"} />
              </DropdownToggle>

              <DropdownMultipleMenu className={"rounded-md"}>
                <DropdownMenu>
                  <DropdownMenuTitle>Sort by</DropdownMenuTitle>
                  <DropdownItem>Default</DropdownItem>
                  <DropdownItem>Alphabetical</DropdownItem>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTitle>View as</DropdownMenuTitle>
                  <DropdownItem onClick={() => handleChangeListView("list")}>
                    List
                  </DropdownItem>
                  <DropdownItem onClick={() => handleChangeListView("grid")}>
                    Grid
                  </DropdownItem>
                </DropdownMenu>
              </DropdownMultipleMenu>
            </Dropdown>
          ) : (
            /* mobile */
            <Button className={"lg:hidden"} onClick={toggleChangeListView}>
              <Icon
                src={!listViewColumn ? CollectionIcon : ListIcon}
                alt={"collection"}
                className={"w-4"}
              />
            </Button>
          )}

          <SearchingComponent
            classNameIcon={"hidden"}
            classNameInput={
              "pl-7 text-white placeholder:text-white/70 text-xs rounded-md"
            }
            placeholder={"Search in Your Library"}
            className={`hidden lg:flex w-0 h-full absolute -translate-x-1 rounded-md bg-white/10 transition-width duration-500 ${isShow ? "opacity-100 w-[80%]" : "opacity-0"}`}
          />
        </LayoutBetween>

        <ul
          className={`mt-3 grid transition-opacity duration-500 ease-in-out lg:transition-none ${opacity} ${listViewColumn ? "gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-2" : "gap-3"}`}
        >
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <ListCollection displayColumn={listViewColumn} />
          <li className="lg:hidden">
            <div
              className={`flex items-center ${listViewColumn ? "justify-center flex-col" : ""} `}
            >
              <Button
                className={`${listViewColumn ? "w-44 h-44" : "w-10 h-10"} bg-white/10 rounded-full flex justify-center items-center`}
              >
                <Icon
                  src={AddIcon}
                  alt={"add"}
                  className={`${listViewColumn ? "w-18" : "w-5"}`}
                />
              </Button>
              <span
                className={`inline-block text-xs ${listViewColumn ? "mt-3" : "ml-2"}`}
              >
                Tambahkan artis
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
);

Collection.displayName = "Collection";

export default Collection;
