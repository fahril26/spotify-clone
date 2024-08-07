import ImageCard from "./ImageCard";

const Card = () => {
  return (
    <div className="bg-secondary p-4 rounded-md hidden md:block" id="card">
      <ImageCard className={"h-40 rounded-md"} />

      <div className="mt-3">
        <h3 className="text-base font-semibold ">Band</h3>

        <p className="text-gray-300 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          delectus.
        </p>
      </div>
    </div>
  );
};

export default Card;
