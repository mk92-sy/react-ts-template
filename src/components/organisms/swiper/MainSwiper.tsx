import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStartButton, SwiperPauseButton } from "components/atoms/swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

export default function MainSwiper() {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <Swiper
      className="main-slider"
      centeredSlides={true} //가운데 정렬
      slidesPerView={1} //한 슬라이드에 보여줄 갯수
      spaceBetween={0} //슬라이드간 거리
      loop={true} //슬라이드 반복 여부
      autoplay={{ delay: 5000 }} //자동 슬라이드 시간
      navigation // 이동 화살표
      modules={[A11y, Navigation, Autoplay, Pagination, A11y]}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
      <SwiperSlide>7</SwiperSlide>
      <SwiperSlide>8</SwiperSlide>
      <SwiperStartButton isPaused={isPaused} setPaused={setIsPaused} />
      <SwiperPauseButton isPaused={isPaused} setPaused={setIsPaused} />
    </Swiper>
  );
}
