export default function MobileHeader() {
  return (
    <div>
      {/* S: 헤더 + gnb 영역 */}
      <header>
        <h1>CI</h1>
        <div className="right">
          <button>검색 버튼</button>
          <button>gnb 토글버튼</button>
        </div>
      </header>
      <div>GNB 메뉴 영역</div>
      {/* E: 헤더 + gnb 영역 */}
    </div>
  );
}
