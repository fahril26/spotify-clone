import { useEffect } from "react";
import Button from "../components/Button";
import { useState } from "react";
import LayoutBetween from "./LayoutBetween";

const Header = ({ children, className }) => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  useEffect(() => {
    const indexStart = window.history.state.idx;
    const currentKey = window.history.state.key;
    const sessionKey = sessionStorage.getItem("history-key");
    setCanGoBack(indexStart > 0);
    setCanGoForward(sessionKey != currentKey);
  }, []);

  return (
    <header
      className={`${className || ""} py-4 w-full sticky top-0 bg-dark z-20 `}
    >
      <LayoutBetween className={"hidden lg:flex"}>
        <nav className="flex gap-2 mr-3">
          <Button
            className={"rounded-btn bg-white/10"}
            disabled={!canGoBack}
            onClick={goBack}
          >
            <svg
              className="w-6 h-6 text-white/50 translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </Button>

          <Button
            className={"rounded-btn bg-white/10 rotate-180"}
            disabled={!canGoForward}
            onClick={goForward}
          >
            <svg
              className="w-6 h-6 text-white/50 dark:text-white translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </Button>
        </nav>
        <div className="rounded-btn bg-cyan-400 absolute right-0"></div>
      </LayoutBetween>

      {children}
    </header>
  );
};

export default Header;
