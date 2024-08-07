import { useEffect, useState, createContext } from "react";

export const WindowSizeContext = createContext();

const WindowSizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowSize = {
    lg: windowWidth >= 1024,
    md: windowWidth >= 640 && windowWidth < 1024,
    sm: windowWidth <= 640,
  };

  useEffect(() => {
    const handleResizeWindow = (e) => {
      setWindowWidth(e.target.innerWidth);
    };

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <WindowSizeContext.Provider
      value={{
        windowSizeLarge: windowSize.lg,
        windowWidth,
        windowSizeMedium: windowSize.md,
        windowSizeSmall: windowSize.sm,
      }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
};

WindowSizeProvider.displayName = "WindowSizeProvider";

export default WindowSizeProvider;
