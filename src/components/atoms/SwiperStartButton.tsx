import { useSwiper } from "swiper/react";
import React, { HTMLAttributes } from "react";

interface SwiperButtonProps extends HTMLAttributes<HTMLSpanElement> {
  isPaused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}
const SwiperStartButton = ({ isPaused, setPaused }: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      style={{ display: isPaused ? "block" : "none" }}
      onClick={() => {
        setPaused(false);
        swiper.autoplay.start();
      }}
    >
      Start
    </button>
  );
};

export default SwiperStartButton;
