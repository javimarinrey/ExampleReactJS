import React from 'react';
import { useTranslation } from "react-i18next";
import logo from './logo.svg';
import './App.css';

import "./i18n";
import SelectLanguage from './components/SelectLanguage';

function App() {

  const { t } = useTranslation();

  return (
    <div className="container">      
      <div className="alert alert-success mt-4" role="alert">
        <h5><i className="bi bi-code-slash"></i> {t('welcome')}</h5>
      </div>
      <SelectLanguage/>

    </div>
  );
}

export default App;
