import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40 && window.scrollY < 150); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <h1>{t('header.portfolio')}</h1>
            </div>
            <ul className={styles.menu}>
              <li onClick={() => scrollToSection('home')}>{t('header.home')}</li>
              <li onClick={() => scrollToSection('education')}>{t('header.about')}</li>
              <li onClick={() => scrollToSection('skills')}>{t('header.services')}</li>
              <li onClick={() => scrollToSection('projects')}>{t('header.projects')}</li>
              <li onClick={() => scrollToSection('contact')}>{t('header.contact')}</li>
            </ul>
            <ul className={styles.languages}>
              <LanguageSwitcher />
            </ul>
          </nav>
        </div>
      </header>

      <header className={styles.mobileHeader}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <h1>{t('header.portfolio')}</h1>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </nav>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.menu}>
            <li onClick={() => { scrollToSection('home'); closeMenu(); }}>{t('header.home')}</li>
            <li onClick={() => { scrollToSection('education'); closeMenu(); }}>{t('header.about')}</li>
            <li onClick={() => { scrollToSection('skills'); closeMenu(); }}>{t('header.services')}</li>
            <li onClick={() => { scrollToSection('projects'); closeMenu(); }}>{t('header.projects')}</li>
            <li onClick={() => { scrollToSection('contact'); closeMenu(); }}>{t('header.contact')}</li>
          </ul>
          <ul className={styles.languages}>
            <LanguageSwitcher />
          </ul>
        </div>
      </header>
    </>
  );
};
