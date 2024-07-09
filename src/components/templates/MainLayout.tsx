import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Dimm from "../atoms/Dimm";

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* Outlet : pages 폴더에 있는 페이지 컴포넌트가 들어가는 영역 */}
      <main className="contents-area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
