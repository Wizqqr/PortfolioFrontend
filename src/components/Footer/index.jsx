import React, { useEffect, useState } from "react";
import styles from './Footer.module.scss';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40 && window.scrollY < 150); // You can adjust this range
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.footerContainer} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <h1>{t('footer.portfolio')}</h1>
            </div>
            <nav>
                <ul className={styles.navMenu}>
                    <li>{t('footer.home')}</li>
                    <li>{t('footer.about')}</li>
                    <li>{t('footer.services')}</li>
                    <li>{t('footer.projects')}</li>
                    <li>{t('footer.contact')}</li>
                </ul>
            </nav>
            <div className={styles.socialIcons}>
                <Facebook className={styles.icon} />
                <Twitter className={styles.icon} />
                <Instagram className={styles.icon} />
                <LinkedIn className={styles.icon} />
            </div>
            <div className={styles.footerText}>
                {t('footer.rights')}
            </div>
        </div>
    );
};
