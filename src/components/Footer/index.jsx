import React from "react";
import styles from './Footer.module.scss';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.footerContainer}>
            <div className={styles.logo}>
                <h1>{t('footer.portfolio')}</h1>
            </div>
            <nav>
                <ul className={styles.navMenu}>
                    <li>{t('footer.home')}</li>
                    <li>{t('footer.about')}</li>
                    <li>{t('footer.services')}</li>
                    <li>{t('footer.projects')}</li>
                    <li>{t('footer.testimonials')}</li>
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
