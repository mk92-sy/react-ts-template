import { useSwiper } from "swiper/react";
import * as TYPES from "types";

const SwiperStartButton = ({
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

export default SwiperStartButton;
