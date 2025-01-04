import React from "react";
import { useTranslation } from "react-i18next";
import styles from './HeaderSection.module.scss'
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import MyPhoto from '../../images/myphoto.jpg'
export const HeaderSection = () => {
    const { t } = useTranslation();

    return(
        <>
          <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.textContent}>
          <p>{t("main.hi")}</p>
          <h4>{t("main.name")}</h4>
          <h1>
            {t("main.fullstack")} <br />
            {t("main.developer")}
          </h1>
          <p>{t("main.description")}</p>
          </div>
        <div className={styles.imageSection}>
          <div className={styles.profileImage}>
            <img src={MyPhoto} alt="Profile" />
          </div>  
          <div className={styles.icons}>
            <Facebook className={styles.icon} />
            <Twitter className={styles.icon} />
            <Instagram className={styles.icon} />
            <LinkedIn className={styles.icon} />
          </div>
        </div>
      </div>
        </>
    )
}