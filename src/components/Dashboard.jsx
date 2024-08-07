import AsideLeft from "./AsideLeft";
import Main from "./Main";
import useWindowSizeContext from "../hook/useWindowSizeContext";
import MusicPlayerDekstop from "./MusicPlayerDekstop";
import MusicPlayerMobile from "./MusicPlayerMobile";

const Dashboard = () => {
  const { windowSizeSmall, windowSizeLarge } = useWindowSizeContext();

  return (
    <div className="lg:p-2 flex md:h-screen lg:h-[87vh] w-full lg:gap-3">
      <AsideLeft />
      <Main />

      {windowSizeLarge && <MusicPlayerDekstop />}
      {windowSizeSmall && <MusicPlayerMobile />}
    </div>
  );
};

Dashboard.displayName = "Dashboard";

export default Dashboard;
