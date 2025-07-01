import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 임포트
import * as pages from "../pages";

import DesktopMainLayout from "layout/DesktopMainLayout";
import MobileMainLayout from "layout/MobileMainLayout";

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
        <Route index path="/" element={<pages.Main />} />
        {/* SUB PAGE */}
        <Route path="/components" element={<pages.Sample1 />} />
        <Route path="/readme" element={<pages.Sample2 />} />
        {/* ERROR PAGE */}
      </Route>
      <Route path="*" element={<pages.Error />} />
      {/* SAMPLE PAGE */}
    </Routes>
  );
};

export default AppRoutes;
