import { useState } from "react";

const Button = ({
  children,
  className,
  disabled,
  onClick,
  style,
  tooltipText,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`${tooltipText ? "relative" : ""} inline-block`}>
      {isHover && (
        <span className="p-1 inline-block whitespace-nowrap text-xs absolute -top-10 -translate-x-[40%] bg-secondary rounded-md shadow-lg animate-fadeIn">
          {tooltipText}
        </span>
      )}

      <button
        type="button"
        style={style}
        className={`transition duration-300 block ${className || ""} ${disabled ? "cursor-no-drop opacity-30 hover:bg-white/10" : ""}`}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
