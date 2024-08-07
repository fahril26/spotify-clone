import { useContext } from "react";
import { WindowSizeContext } from "../context/WindowSizeProvider";

export default function useWindowSizeContext() {
  const value = useContext(WindowSizeContext);

  return value;
}
