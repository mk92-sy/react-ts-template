import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SubSwiper() {
  return (
    <Swiper
      className="sub-swiper"
      centeredSlides={true} //가운데 정렬
      slidesPerView={1.2} //한 슬라이드에 보여줄 갯수
      spaceBetween={20} //슬라이드간 거리
      loop={true} //슬라이드 반복 여부
      autoplay={{ delay: 5000 }} //자동 슬라이드 시간
      pagination={{
        clickable: true,
      }} //pager여부
      modules={[A11y, Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
    </Swiper>
  );
}
