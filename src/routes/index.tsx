import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 임포트
import {
  SamplePage1,
  SamplePage2,
  ErrorPage,
  MainPage,
  SubPage1,
  SubPage2,
} from "pages";

const AppRoutes = () => (
  // Routes : 페이지 경로(Route)들을 감싸는 Wrapper 엘리먼트 (필수)
  // Route : 각각의 페이지를 정의하는 컴포넌트 (element에 페이지나 레이아웃 형태의 컴포넌트 삽입, path에 경로 삽입)
  <Routes>
    {/* MAIN PAGE */}
    <Route index path="/home" element={<MainPage />} />
    {/* SUB PAGE */}
    <Route path="/sub1" element={<SubPage1 />} />
    <Route path="/sub2" element={<SubPage2 />} />
    {/* ERROR PAGE */}
    <Route path="*" element={<ErrorPage />} />
    {/* SAMPLE PAGE */}
    <Route path="/sample1" element={<SamplePage1 />} />
    <Route path="/sample2" element={<SamplePage2 />} />
  </Routes>
);

export default AppRoutes;
