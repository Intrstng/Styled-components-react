import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/GlobalStyles';
// import { FontStyles } from './styles/Fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);
root.render(
<React.StrictMode>
    <App />
    <GlobalStyles />
    {/* <FontStyles /> */}
  </React.StrictMode>
);





reportWebVitals();