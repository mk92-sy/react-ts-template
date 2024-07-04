import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/common.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 1. 리액트 앱의 시작점 프로젝트마다 약간씩 다를 수 있지만 대부분 index로 시작하는 jsx, tsx에서 시작한다.
// 2. 공통으로 사용하는 css는 보통 여기에 import 한다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
