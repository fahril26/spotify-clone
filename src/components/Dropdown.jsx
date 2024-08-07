import { cloneElement, Children, useState, useEffect } from "react";
import Button from "./Button";

// dropdown
export const Dropdown = ({
  className,
  children,
  show,
  defaultItemActive,
  multipleMenu,
}) => {
  const initialActiveItem = multipleMenu
    ? [...Array(children.length)].map(() => null)
    : null;
  const [showDropdown, setShowDropdown] = useState(show);
  const [activeItem, setActiveItem] = useState(initialActiveItem);
  const handleShowDropdown = (setState) => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    const collectionComponent = document.querySelector(".collection");
    const mainComponent = document.querySelector("main");
    const handleHiddenDropdown = (e) => {
      const dropdown = document.querySelector(".dropdown");
      const isClickInsideDropdown = dropdown.contains(e.target);

      if (!isClickInsideDropdown) setShowDropdown(false);
    };

    const hiddenDropdownOnScroll = () => {
      setShowDropdown(false);
    };

    mainComponent.addEventListener("scroll", hiddenDropdownOnScroll);
    collectionComponent.addEventListener("scroll", hiddenDropdownOnScroll);
    window.addEventListener("click", handleHiddenDropdown);

    return () => {
      window.removeEventListener("click", handleHiddenDropdown);
      mainComponent.removeEventListener("scroll", hiddenDropdownOnScroll);
      collectionComponent.removeEventListener("scroll", hiddenDropdownOnScroll);
    };
  }, []);

  useEffect(() => {
    setShowDropdown(show);
  }, [show]);

  const childrenElement = Children.map(children, (child) => {
    const nameComponent = child.type.name;

    if (nameComponent === "DropdownToggle")
      return cloneElement(child, {
        onClick: () => handleShowDropdown(setShowDropdown),
      });
    else if (nameComponent === "DropdownMenu")
      return cloneElement(child, {
        showDropdown,
        activeItem,
        setActiveItem,
        defaultItemActive,
      });
    else if (nameComponent === "DropdownMultipleMenu")
      return cloneElement(child, {
        showDropdown,
        activeItem,
        setActiveItem,
        defaultItemActive,
        multipleMenu,
      });
  });

  return <div className={`dropdown ${className || ""}`}>{childrenElement}</div>;
};

// dropdown title
export const DropdownMenuTitle = ({ children, className }) => {
  return (
    <span
      className={`dropdown-title inline-block my-3  px-4 text-xs text-white/50 ${className || ""}`}
    >
      {children}
    </span>
  );
};

// dropdown toggle
export const DropdownToggle = ({ className, onClick, children = "Button" }) => {
  const buttonChildren = Children.map(children, (child) => {
    if (child.type)
      return cloneElement(child, {
        className: `${child.props.className || ""} dropdown-btn-children`,
      });

    return child;
  });
  return (
    <Button className={`dropdown-btn ${className || ""}`} onClick={onClick}>
      {buttonChildren}
    </Button>
  );
};

// dropdown menu multiple
export const DropdownMultipleMenu = ({
  children,
  className,
  showDropdown,
  activeItem,
  multipleMenu,
  setActiveItem,
  defaultItemActive,
}) => {
  useEffect(() => {
    const newItemActive = activeItem.map((item, index) => {
      return children[index].props.children[defaultItemActive].props.children;
    });

    setActiveItem(newItemActive);
  }, [defaultItemActive]);

  const handleActiveMultipleMenu = (indexMenu, nameItem) => {
    const newActiveItem = activeItem.slice();
    newActiveItem[indexMenu] = nameItem;
    setActiveItem(newActiveItem);
  };

  const dropdownMenuChildrens = Children.map(children, (child, index) => {
    const classNameChildren = child.props.className || "";

    if (child.type.name === "DropdownMenu")
      return cloneElement(child, {
        showDropdown,
        activeItem: activeItem[index],
        setActiveItem,
        multipleMenu,
        indexMenu: index,
        handleActiveMultipleMenu,
        defaultItemActive,
        className: `${classNameChildren} ${index != children.length - 1 ? "border-b border-white/20" : ""} rounded-none w-full pb-2 static`,
      });
  });

  return (
    <div
      className={`dropdown-menu px-1 ${className || ""}`}
      id="dropdown-multiple-menu"
    >
      {showDropdown && dropdownMenuChildrens}
    </div>
  );
};

// dropdown menu
export const DropdownMenu = ({
  children,
  showDropdown,
  className,
  activeItem,
  handleActiveMultipleMenu,
  multipleMenu,
  indexMenu,
  setActiveItem,
}) => {
  const dropdownItems = Children.map(children, (child, index) => {
    const nameItem = child.props.children;
    const isActive = nameItem === activeItem;
    const name = child.type.name;

    if (name === "DropdownItem") {
      return cloneElement(child, {
        onClick: () => {
          if (child.props.onClick) child.props.onClick();
          if (multipleMenu) handleActiveMultipleMenu(indexMenu, nameItem);
          else setActiveItem(child.props.children);
        },
        activeItem,
        index,
        className: `${child.props.className || ""} ${isActive ? "active-item" : ""}`,
      });
    }

    if (name === "DropdownMenuTitle") return cloneElement(child);
  });

  return (
    <>
      {showDropdown && (
        <ul id="dropdown-menu" className={`dropdown-menu ${className || ""}`}>
          {dropdownItems}
        </ul>
      )}
    </>
  );
};

// dropdown item
export const DropdownItem = ({ className, children, onClick }) => {
  return (
    <li className={`dropdown-item  ${className || ""}`} id="dropdown-item">
      <Button className={"dropdown-btn"} onClick={onClick}>
        {children}
      </Button>
    </li>
  );
};
