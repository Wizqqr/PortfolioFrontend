import React from 'react';
import i18next from 'i18next';
import style from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
    };

    return (
        <ul className={style.languages}>
            <li onClick={() => changeLanguage('en')} className={style.languageOption}>
                EN                
            </li>
            <li onClick={() => changeLanguage('ru')} className={style.languageOption}>
                RU        
            </li>
            <li onClick={() => changeLanguage('ky')} className={style.languageOption}>
                KG                
            </li>
        </ul>
    );
};

