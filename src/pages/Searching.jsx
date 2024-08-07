import { memo } from "react";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import SearchingComponent from "../components/SearchingComponent";

const Searching = memo(() => {
  return (
    <div id="searching" className="p-4 lg:p-0 h-[2000px]">
      <h1 className="text-md font-semibold my-3 lg:hidden">Search</h1>

      <Header className={"flex items-center p-0 py-2 "}>
        <SearchingComponent
          className={"w-full lg:bg-white/10 lg:w-72 lg:rounded-full"}
          classNameInput={
            " lg:text-white lg:placeholder:text-white/65 placeholder:text-dark "
          }
          classNameIcon={"lg:ml-2"}
          placeholder={"What do you want to listen to?"}
        />
      </Header>

      <div className="mt-2 lg:mt-5">
        <h5 className="text-xs font-semibold mb-4 lg:text-xl lg:font-bold">
          Browse All
        </h5>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 ">
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
          <ImageCard className={"h-24 sm:min-h-36 md:h-40 rounded-md"} />
        </div>
      </div>
    </div>
  );
});

Searching.displayName = "Searching";

export default Searching;
