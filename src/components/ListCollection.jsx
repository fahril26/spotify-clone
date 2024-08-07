import Button from "../components/Button";
import Icon from "../components/Icon";
import MoreIcon from "../assets/icons/more.png";

const ListCollection = ({ displayColumn }) => {
  return (
    <li>
      <div
        className={`flex items-center ${displayColumn ? "flex-col" : "justify-between"}`}
      >
        <div
          className={`flex max-w-full ${displayColumn ? " flex-col items-center" : ""}`}
        >
          <div
            className={`bg-cyan-400 rounded-full ${displayColumn ? "w-44 h-44 lg:w-[8rem] lg:h-[8rem]" : "w-10 h-10"} `}
          >
            <img src="" alt="" />
          </div>

          <div
            className={`flex flex-col justify-center items-center ${!displayColumn ? "ml-2" : "mt-2"}`}
          >
            <span className="text-xs">Name</span>
            <span className="text-[10px] text-white/50">Artist</span>
          </div>
        </div>

        {!displayColumn && (
          <Button className="flex flex-col gap-0 mr-3">
            <Icon src={MoreIcon} alt={"more"} className={"w-4"} />
          </Button>
        )}
      </div>
    </li>
  );
};

export default ListCollection;
