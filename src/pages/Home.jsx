import Footer from "../components/Footer";
import SectionRecommended from "../components/SectionRecommended";
import SectionMostPlayed from "../components/SectionMostPlayed";
import Setting from "../assets/icons/setting.png";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Header from "../components/Header";
import LayoutBetween from "../components/LayoutBetween";
import { memo } from "react";
import WindowSizeProvider from "../context/WindowSizeProvider";

const Home = memo(() => {
  return (
    <div className="p-4 lg:p-0" id="home">
      <LayoutBetween>
        <h1 className="text-md mb-1 font-semibold lg:text-xl lg:hidden">
          Selamat Siang
        </h1>
        <Button className={"lg:hidden"}>
          <Icon src={Setting} alt="setting" className="w-[18px]" />
        </Button>
      </LayoutBetween>

      <Header>
        <div className="lg:mt-11">
          <Button
            className={
              "text-xs text px-3 py-1 text-white/90 bg-white/10 rounded-full "
            }
          >
            Music
          </Button>

          <Button
            className={
              "text-xs text px-3 py-1 ml-2 text-white/90 bg-white/10 rounded-full "
            }
          >
            Podcast
          </Button>
        </div>
      </Header>

      <SectionMostPlayed />
      <WindowSizeProvider>
        <SectionRecommended />
        <SectionRecommended />
        <SectionRecommended />
        <SectionRecommended />
      </WindowSizeProvider>
      <Footer />
    </div>
  );
});

Home.displayName = "Home";

export default Home;
