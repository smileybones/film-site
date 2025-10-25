import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Choose router based on environment
const RouterWrapper =
  import.meta.env.MODE === 'development' ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterWrapper>
      <App />
    </RouterWrapper>
  </React.StrictMode>
);
