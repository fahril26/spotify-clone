import ListMostPlayed from "./ListMostPlayed";

const SectionMostPlayed = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mb-8">
      <ListMostPlayed />
      <ListMostPlayed />
      <ListMostPlayed />
      <ListMostPlayed />
      <ListMostPlayed />
      <ListMostPlayed />
      <ListMostPlayed className={"hidden lg:flex"} />
      <ListMostPlayed className={"hidden lg:flex"} />
    </div>
  );
};

export default SectionMostPlayed;
