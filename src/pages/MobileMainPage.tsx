import MainSwiper from "components/organisms/swiper/MainSwiper";
import SubSwiper from "components/organisms/swiper/SubSwiper";

export default function MobileMainPage() {
  return (
    //html(JSX)는 이곳에
    <div>
      <MainSwiper />
      <section className="sub-section">
        <button className="card">
          <strong>내게 맞는 요금제 찾기</strong>
          <p>
            요금제 뭐 쓰지?
            <br />
            고민할 필요가 없어요!
          </p>
        </button>
      </section>
      <SubSwiper />
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </div>
  );
}
