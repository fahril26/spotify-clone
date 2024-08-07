import { useAudioContext } from "../hook/useAudioContext";
import VolumeMuteIcon from "../assets/icons/volume-xmark-solid.svg";
import Button from "./Button";
import Icon from "./Icon";

const VolumeControls = () => {
  const { volumeState, handleVolume, setVolumeState } = useAudioContext();
  return (
    <div className="flex items-center gap-3">
      <Button
        tooltipText={volumeState.isMuted ? "Unmute" : "Mute"}
        onClick={() =>
          setVolumeState((value) => ({
            ...value,
            isMuted: !value.isMuted,
          }))
        }
      >
        <Icon
          src={volumeState.isMuted ? VolumeMuteIcon : volumeState.volumeIcon}
          alt={"volume"}
          className={"w-4"}
        />
      </Button>
      <label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          className="h-1 w-9/12 accent-green-600 -translate-y-1 cursor-pointer"
          value={volumeState.volumeValue}
          onChange={handleVolume}
        />
      </label>
    </div>
  );
};

export default VolumeControls;
