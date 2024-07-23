export default function Header() {
  return (
    <div>
      {/* S: 헤더 + gnb 영역 */}
      <header>
        <div className="left">
          <h1>CI</h1>
          <nav>
            <a href="/a0001">Menu1</a>
            <a href="/a0002">Menu2</a>
            <a href="/a0003">Menu3</a>
          </nav>
        </div>
        <div className="right">
          <button>검색 버튼</button>
          <button></button>
        </div>
      </header>
      <div>GNB 메뉴 영역</div>
      {/* E: 헤더 + gnb 영역 */}
    </div>
  );
}
