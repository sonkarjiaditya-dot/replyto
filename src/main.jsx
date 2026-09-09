import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RepliesProvider } from './context/RepliesContext';
import { ToastProvider } from './components/Toast';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RepliesProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </RepliesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
