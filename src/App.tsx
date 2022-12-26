import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div>
      <FormattedMessage
        id="app.title"
        defaultMessage="Como manejar i18n para aplicaciones React"
        description="Titulo de la aplicacion"
      />
    </div>
  );
}

export default App
