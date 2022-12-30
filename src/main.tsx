import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IntlProvider } from 'react-intl';
import enMessages from './translations/compiled-messages/en.json';
import esMessages from './translations/compiled-messages/es.json';

const translations = {
  en: enMessages,
  es: esMessages,
};

const getUserLocale = () => {
  const locale = localStorage.getItem('locale');
  if ((locale && locale === 'es') || locale === 'en') {
    return locale;
  }
  return 'en';
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider defaultLocale="en" locale={getUserLocale()} messages={translations[getUserLocale()]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
);
