import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import flagsmith from 'flagsmith'
import {FlagsmithProvider} from 'flagsmith/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagsmithProvider options={{
      environmentID: "dF5aF2UXeRtbCxWg47kbhY",
     }} flagsmith={flagsmith}>
      <App />
    </FlagsmithProvider>
    
  </React.StrictMode>
);

reportWebVitals();
