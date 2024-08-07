import Icon from "./Icon";
import { NavLink } from "react-router-dom";

const NavList = ({ icon, text, className, path, onClick }) => {
  return (
    <li
      className={`flex-1 pt-2 pb-3 sm:flex-none list-none group ${className || ""}`}
      onClick={onClick}
    >
      <NavLink
        to={path}
        className=" flex justify-center h-full sm:w-full items-center flex-col sm:flex-row sm:justify-start lg:hover:underline opacity-60 group-hover:opacity-100 transition duration-300"
      >
        <Icon
          src={icon}
          className="w-5 block sm:inline-block lg:w-6"
          alt={text}
        />
        <span className="text-[8.5px] font-thin mt-[3px] sm:mt-0 sm:ml-2 sm:font-semibold lg:text-base">
          {text}
        </span>
      </NavLink>
    </li>
  );
};

export default NavList;
