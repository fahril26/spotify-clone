import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";

const SliderItem = () => {
  return (
    <div className="h-32 w-28">
      <ImageCard className={"h-24"} />
      <DescriptionCard />
    </div>
  );
};

export default SliderItem;
