import React, { useState, useEffect } from "react";
import { mapRange } from "../../utils/index";
import styles from "./Sound.module.css";

const volumeRange = [0.05, 0.3];
let niceOceanSounds;
if (typeof window !== "undefined") {
  niceOceanSounds = new Audio("sounds/niceOceanSounds.mp3");
}

export function Sound({ calm, calmRange }) {
  const [isPlayingSounds, setIsPlaying] = useState(false);

  useEffect(() => {
    const volume = mapRange({
      value: calm,
      fromRange: calmRange,
      toRange: volumeRange,
      reverse: true,
    });
    niceOceanSounds.volume = volume;
  }, [calm]);

  function playSounds() {
    if (!isPlayingSounds) {
      niceOceanSounds.play();
      niceOceanSounds.currentTime = 2;
    } else {
      niceOceanSounds.pause();
      niceOceanSounds.currentTime = 2;
    }
    setIsPlaying((prevIsPlayingSounds) => !prevIsPlayingSounds);
    niceOceanSounds.volume = 0.3;
  }

  if (isPlayingSounds) {
    return (
      <div>
        <img
          src="images/noVolume.png"
          width="30px"
          hieght="30px"
          onClick={playSounds}
          alt="Volume Off Button"
          className={styles.audioLogo}
        />
      </div>
    );
  }
  return (
    <img
      src="images/volume.png"
      width="30px"
      hieght="30px"
      onClick={playSounds}
      alt="Volume On Button"
      className={styles.audioLogo}
    />
  );
}
