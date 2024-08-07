import { useContext } from "react";
import { AudioContext } from "../context/AudioProvider";

export const useAudioContext = () => {
  const audioValueContext = useContext(AudioContext);
  return audioValueContext;
};
