import { Routes, Route } from "react-router-dom";
// 레이아웃 컴포넌트 임포트
import MainLayout from "components/templates/MainLayout";
import MobileLayout from "components/templates/MobileLayout";
// 페이지 컴포넌트 임포트
import { MobileMainPage, DetailPage, ErrorPage, MainPage } from "pages";

const AppRoutes = () => (
  // Routes : 페이지 경로(Route)들을 감싸는 Wrapper 엘리먼트 (필수)
  // Route : 각각의 페이지를 정의하는 컴포넌트 (element에 페이지나 레이아웃 형태의 컴포넌트 삽입, path에 경로 삽입)
  <Routes>
    {/* MAIN PAGE */}
    <Route element={<MainLayout />}>
      <Route index path="/" element={<MainPage />} />
    </Route>
    {/* SUB PAGES */}
    <Route element={<MobileLayout />}>
      <Route path="/main" element={<MobileMainPage />} />
      {/* ▼ 아래처럼 동적인 경로도 가능하다 */}
      <Route path="/detail/:id" element={<DetailPage />} />
    </Route>
    {/* ERROR PAGE */}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
