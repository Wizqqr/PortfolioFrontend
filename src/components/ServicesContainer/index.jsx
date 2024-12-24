import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ServicesContainer.module.scss";
import Frontend from "../../images/ux-design.png";
import UxUi from "../../images/idea.png";
import Backend from "../../images/ux-design (1).png";
import Database from "../../images/programming.png";

export const ServicesContainer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.servicesContainer}>
      <h1>{t("main.services")}</h1>
      <p>{t("main.servicesDescription")}</p>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <img src={Frontend} alt="FrontEnd Dev" />
          <h1>{t("main.frontend")}</h1>
          <p>{t("main.frontendDescription")}</p>
        </div>
        <div className={styles.serviceCard}>
          <img src={Backend} alt="BackEnd Dev" />
          <h1>{t("main.backend")}</h1>
          <p>{t("main.backendDescription")}</p>
        </div>
        <div className={styles.serviceCard}>
          <img src={UxUi} alt="UI/UX Design" />
          <h1>{t("main.uiux")}</h1>
          <p>{t("main.uiuxDescription")}</p>
        </div>
        <div className={styles.serviceCard}>
          <img src={Database} alt="DevOps" />
          <h1>{t("main.database")}</h1>
          <p>{t("main.databaseDescription")}</p>
        </div>
      </div>
    </div>
  );
};
