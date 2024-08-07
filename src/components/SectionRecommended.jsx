import useWindowSizeContext from "../hook/useWindowSizeContext";
import Card from "./Card";
import LayoutBetween from "./LayoutBetween";
import Slider from "./Slider";

const SectionRecommended = () => {
  const { windowSizeLarge } = useWindowSizeContext();

  return (
    <section className="mb-8">
      <div className="min-w-full">
        <LayoutBetween className={"mb-3"}>
          <h3 className="text-sm lg:text-lg">My Playlist</h3>
        </LayoutBetween>

        {windowSizeLarge ? (
          <div className="grid grid-cols-4 gap-6 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        ) : (
          <Slider />
        )}
      </div>
    </section>
  );
};

export default SectionRecommended;
