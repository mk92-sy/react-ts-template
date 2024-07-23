import BottomNavBar from "components/molecules/BottomNavBar";
import MobileHeader from "components/organisms/common/MobileHeader";
import { Outlet } from "react-router-dom";

export default function MobileMainLayout() {
  return (
    <>
      <MobileHeader />
      <Outlet />
      <BottomNavBar />
    </>
  );
}
