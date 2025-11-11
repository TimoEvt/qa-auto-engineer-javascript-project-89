import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // если есть глобальные стили

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

