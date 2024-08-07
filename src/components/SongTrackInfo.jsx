import { memo } from "react";
import useWindowSizeContext from "../hook/useWindowSizeContext";
import TrackTitle from "./TrackTitle";

const SongTrackInfo = memo(({ className }) => {
  const { windowSizeMedium } = useWindowSizeContext();

  return (
    <>
      {windowSizeMedium ? (
        <div className="w-full px-1 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-12 h-12 bg-red-500"></div>

            <TrackTitle />
          </div>
          <div className="mr-4">play</div>
        </div>
      ) : (
        <div
          className={`${className} w-full flex flex-col lg:flex-row lg:w-auto lg:items-center mt-5 lg:mt-0`}
        >
          <div className="w-full h-96 lg:w-14 lg:h-14 rounded-none bg-red-500"></div>
          <TrackTitle
            className={"mt-5 lg:mt-0 lg:flex flex-col items-center lg:ml-4"}
          />
        </div>
      )}
    </>
  );
});

SongTrackInfo.displayName = "SongTrackInfo";

export default SongTrackInfo;
