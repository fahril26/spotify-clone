const ListMostPlayed = ({ className }) => {
  return (
    <div
      className={`flex bg-secondary items-center rounded-md overflow-hidden ${className||''}`}
    >
      <div className="bg-cyan-400 w-12 h-12"></div>
      <span className="ml-3 text-xs lg:text-base font-semibold">Name</span>
    </div>
  );
};

export default ListMostPlayed;
