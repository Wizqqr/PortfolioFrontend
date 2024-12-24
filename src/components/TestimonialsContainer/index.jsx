import React from "react";
import { useTranslation } from "react-i18next";
import styles from './TestimonialsContainer.module.scss'
export const TestimonialsContainer = () => {
    const { t } = useTranslation();

    return(
        <>
           {/* Testimonials Section */}
      <div className={styles.testimonialsContainer}>
        <h1>{t("main.testimonials")}</h1>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p>"{t("main.testimonial1")}"</p>
            <h4>{t("main.client1")}</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>"{t("main.testimonial2")}"</p>
            <h4>{t("main.client2")}</h4>
          </div>
        </div>
      </div>

        </>
    )
}