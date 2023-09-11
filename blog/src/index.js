import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/mainPage/Main';
import SideNav from './ui/sideNav/SideNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideNav />
    <Main />
  </React.StrictMode>
);
