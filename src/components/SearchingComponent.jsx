import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchingComponent = ({
  className,
  classNameInput,
  placeholder,
  classNameIcon,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const input = inputRef;
    if (isFocus) input.current.focus();
  }, [isFocus]);
  return (
    <div
      className={`${className || ""} p-2 bg-white rounded-sm flex items-center`}
      id="search"
      onClick={() => setIsFocus(true)}
    >
      <span className={`${classNameIcon || ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="search"
          className="w-5 mr-2 hidden lg:block"
          fill="#999"
        >
          <g data-name="Layer 2">
            <path
              d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
              data-name="search"
            ></path>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="search"
          className="w-5 mr-2 lg:hidden"
        >
          <g data-name="Layer 2">
            <path
              d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
              data-name="search"
            ></path>
          </g>
        </svg>
      </span>
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={inputRef}
          id="search-input"
          className={`text-sm w-full text-dark font-semibold bg-transparent outline-none placeholder:font-semibold ${classNameInput}`}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default SearchingComponent;
