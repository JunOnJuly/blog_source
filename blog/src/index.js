import React from 'react';
import ReactDOM from 'react-dom/client';
// import Main from './pages/mainPage/Main';
import Codespace from './ui/codeSpace/CodeSpace'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    <Codespace />
  </React.StrictMode>
);
