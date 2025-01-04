import React from "react";
import { useTranslation } from "react-i18next";
import styles from './SkillsContainer.module.scss'

export const SkillsContainer = () => {
    const { t } = useTranslation();

    return(
        <>
        {/* Skills Section */}
<div className={styles.skillsContainer}>
  <h1>{t("main.skills")}</h1>
  <div className={styles.skillsGrid}>
    <div className={styles.skillItem}>
      <span>JavaScript</span>
      <div className={styles.skillBar} style={{ width: "90%" }} />
    </div>
    <div className={styles.skillItem}>
      <span>React</span>
      <div className={styles.skillBar} style={{ width: "85%" }} />
    </div>
    <div className={styles.skillItem}>
      <span>Node.js</span>
      <div className={styles.skillBar} style={{ width: "80%" }} />
    </div>
    <div className={styles.skillItem}>
      <span>Python</span>
      <div className={styles.skillBar} style={{ width: "80%" }} />
    </div>
    <div className={styles.skillItem}>
      <span>Django REST</span>
      <div className={styles.skillBar} style={{ width: "60%" }} />
    </div>
    <div className={styles.skillItem}>
      <span>Aiogram (TelegramBot) </span>
      <div className={styles.skillBar} style={{ width: "35%" }} />
    </div>   
    <div className={styles.skillItem}>
      <span>DataBase (MongoDB, PostgreSQL)</span>
      <div className={styles.skillBar} style={{ width: "60%" }} />
    </div>  
    <div className={styles.skillItem}>
      <span>Express.js</span>
      <div className={styles.skillBar} style={{ width: "80%" }} />
    </div>  
  
  </div>
</div>
        </>
    )
}