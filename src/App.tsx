// 라우팅 관련 필요 컴포넌트 임포트
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // 1. <AppRoutes>을 <BrowserRouter>로 한번 감싸 경로 변화를 감지할수 있도록 한다.
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
