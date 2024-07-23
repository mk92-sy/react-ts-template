import { Footer, Header } from "components/organisms";
import { Outlet } from "react-router-dom";

export default function DesktopMainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
