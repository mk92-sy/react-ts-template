import { Outlet } from "react-router-dom";
import MobileHeader from "../organisms/MobileHeader";
import StickyBanner from "../molecules/StickyBanner";

export default function MobileLayout() {
  return (
    <>
      <StickyBanner />
      <MobileHeader />
      {/* Outlet : pages 폴더에 있는 페이지 컴포넌트가 들어가는 영역 */}
      <Outlet />
    </>
  );
}
