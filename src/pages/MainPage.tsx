import { isDesktop } from "react-device-detect";
import BottomNavigation from "components/molecules/BottomNavBar";
import { useMediaQuery } from "react-responsive";

export default function MainPage() {
  const isDesktopView = useMediaQuery({ minWidth: 1025 }) && isDesktop;
  return (
    <>
      {isDesktopView ? (
        <>
          {/* ----- 데스크탑 레이아웃 ----- */}
          {/* S: 헤더 + gnb 영역 */}
          <div>
            <header>
              <div className="left">
                <h1>CI</h1>
                <nav>
                  <a href="#">Menu1</a>
                  <a href="#">Menu2</a>
                  <a href="#">Menu3</a>
                </nav>
              </div>
              <div className="right">
                <button>검색 버튼</button>
                <button></button>
              </div>
            </header>
            <div>GNB 메뉴 영역</div>
          </div>
          {/* E: 헤더 + gnb 영역 */}

          {/* S: 메인 컨텐츠(fixed) , 서브 컨텐츠 + 푸터(스크롤) 영역 */}
          <div>
            <section>
              <div>메인 슬라이드(로그인 X) / 현황 메뉴(로그인 O)</div>
            </section>
            <aside>
              <div>바로가기 메뉴 영역(로그인 O)</div>
              <div>이벤트 슬라이드 영역</div>
              <div>사용방법 슬라이드 영역</div>
              <div>자주 찾는 메뉴 영역</div>
              <footer>푸터 영역</footer>
            </aside>
          </div>
          {/* E: 컨텐츠 + 푸터 영역 */}
          {/* ----- 데스크탑 레이아웃 ----- */}
        </>
      ) : (
        <>
          {/* ----- 모바일 레이아웃 ----- */}
          {/* S: 헤더 + gnb 영역 */}
          <div>
            <header>
              <h1>CI</h1>
              <div className="right">
                <button>검색 버튼</button>
                <button>gnb 토글버튼</button>
              </div>
            </header>
            <div>GNB 메뉴 영역</div>
          </div>
          {/* E: 헤더 + gnb 영역 */}

          {/* S: 컨텐츠 영역 */}
          <div>
            <div>메인 슬라이드 영역(로그인 X)</div>
            <div>현황 메뉴(로그인 O)</div>
            <div>바로가기 메뉴 영역(로그인 O)</div>
            <div>이벤트 슬라이드 영역</div>
            <div>사용방법 슬라이드 영역</div>
            <div>자주 찾는 메뉴 영역</div>
          </div>
          {/* E: 컨텐츠 영역 */}

          {/* S: 기타 공통 + 푸터 영역 */}
          <div>플로팅 바텀 버튼 영역</div>
          <div>
            바텀 네비바 영역
            <BottomNavigation />
          </div>
          {/* E: 기타 공통 + 푸터 영역 */}
          {/* ----- 모바일 레이아웃 ----- */}
        </>
      )}
    </>
  );
}
