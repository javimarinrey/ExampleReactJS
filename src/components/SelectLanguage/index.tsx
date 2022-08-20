import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const SelectLanguage = () => {

    const { t, i18n } = useTranslation();

    return (
        <select className="form-select" value={i18n.language} onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            localStorage.setItem("language", e.target.value);
        }}>
            <option value="es">{t('es')}</option>
            <option value="en">{t('en')}</option>
        </select>
    )
};

export default SelectLanguage;