import BottomNavBar from "components/molecules/BottomNavBar";
import { Footer, Header } from "components/organisms";
import { Outlet } from "react-router-dom";

export default function MobileMainLayout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
      <BottomNavBar />
    </>
  );
}
