import { useSwiper } from "swiper/react";
import * as TYPES from "types";

export const SwiperPauseButton = ({
  isPaused,
  setPaused,
}: TYPES.SwiperButtonProps) => {
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

export const SwiperStartButton = ({
  isPaused,
  setPaused,
}: TYPES.SwiperButtonProps) => {
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
