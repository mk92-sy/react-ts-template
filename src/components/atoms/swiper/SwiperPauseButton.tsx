import { useSwiper } from "swiper/react";
import * as TYPES from "types";

const SwiperPauseButton = ({
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

export default SwiperPauseButton;
