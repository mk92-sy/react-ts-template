import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 임포트
import * as Pages from "../pages";

import MobileMainLayout from "components/layouts/MobileMainLayout";
import DesktopMainLayout from "components/layouts/DesktopMainLayout";
import { useDesktopView } from "hooks/useDesktopView";

const AppRoutes = () => {
  const isDesktopView = useDesktopView();
  return (
    // Routes : 페이지 경로(Route)들을 감싸는 Wrapper 엘리먼트 (필수)
    // Route : 각각의 페이지를 정의하는 컴포넌트 (element에 페이지나 레이아웃 형태의 컴포넌트 삽입, path에 경로 삽입)
    <Routes>
      {/* MAIN PAGE */}
      <Route
        element={isDesktopView ? <DesktopMainLayout /> : <MobileMainLayout />}
      >
        <Route index path="/a0001" element={<Pages.A0001Page />} />
        {/* SUB PAGE */}
        <Route path="/a0002" element={<Pages.A0002Page />} />
        <Route path="/a0003" element={<Pages.A0003Page />} />
        {/* ERROR PAGE */}
        <Route path="*" element={<Pages.ErrorPage />} />
      </Route>
      {/* SAMPLE PAGE */}
      <Route path="/sample1" element={<Pages.SamplePage1 />} />
      <Route path="/sample2" element={<Pages.SamplePage2 />} />
    </Routes>
  );
};

export default AppRoutes;
