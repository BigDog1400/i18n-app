import React from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';

function App() {
  const changeLanguage = (locale: string) => {
    localStorage.setItem('locale', locale);
    window.location.reload();
  };
  return (
    <div>
      <FormattedMessage
        id="G2U8Pi"
        defaultMessage="Como manejar i18n para aplicaciones React"
        description="Titulo de la aplicacion"
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px',
        }}
      >
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </div>
  );
}

export default App;
