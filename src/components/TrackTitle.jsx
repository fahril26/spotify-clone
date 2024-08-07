const TrackTitle = ({ className }) => {
  return (
    <div className={`${className || ""}`}>
      <div className="text-xs lg:text-base">Title</div>
      <div className="text-[10px] lg:text-xs text-gray-400">Artist</div>
    </div>
  );
};

export default TrackTitle;
