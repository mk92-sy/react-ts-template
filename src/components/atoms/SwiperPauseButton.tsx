import { useSwiper } from "swiper/react";
import React, { HTMLAttributes } from "react";

interface SwiperButtonProps extends HTMLAttributes<HTMLSpanElement> {
  isPaused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}
const SwiperPauseButton = ({ isPaused, setPaused }: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      style={{ display: isPaused ? "none" : "block" }}
      onClick={() => {
        setPaused(true);
        swiper.autoplay.pause();
      }}
    >
      Pause
    </button>
  );
};

export default SwiperPauseButton;
