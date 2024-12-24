import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./CourseDetail.module.scss";
import { ImageSection } from "../../components/ImageCarousel";


export const CourseDetail = ({ refs }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  const courses = {
    1: {
      title: t("main.university"),
      description: t("main.universityDescription"),
      year: t("main.year"),
      details: t("main.universityDetails"),
    },
    2: {
      title: t("main.course"),
      description: t("main.courseDescription"),
      year: t("main.year"),
      details: t("main.courseDetails"),
    },
    3: {
      title: t("main.course2"),
      description: t("main.course2Description"),
      year: t("main.year2"),
      details: t("main.course2Details"),
    },
  };

  const course = courses[id];

  if (!course) {
    return <div className={styles.notFound}>{t("main.courseNotFound")}</div>;
  }

  return (
    <div className={styles.courseDetail}>
      <div className={styles.headerSection}>
        <h1>{course.title}</h1>
        <p className={styles.description}>{course.description}</p>
      </div>

      <div className={styles.carouselSection}>
        <h2>{t("main.gallery")}</h2>
       <ImageSection/>
      </div>

      <div className={styles.textSection}>
        <h2>{t("main.about")}</h2>
        <p>
          <strong>{t("main.year")}: </strong>
          {course.year}
        </p>
        <p>{course.details}</p>
      </div>

      <div className={styles.additionalSection}>
        <h2>{t("main.courseDetailsHeader")}</h2>
        <p>{t("main.courseExtraDetails")}</p>
      </div>
    </div>
  );
};
