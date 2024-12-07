import React from 'react';
import ReactDOM from 'react-dom/client';
import renderContent from '../renderContent';
import App from './App';
import { Toaster } from '@/components/ui/toaster';

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
  ReactDOM.createRoot(appRoot).render(
    <React.StrictMode>
      <App />
      <Toaster />
    </React.StrictMode>
  );
});
