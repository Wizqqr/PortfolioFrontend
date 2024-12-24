import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./EducationContainer.module.scss";

export const EducationContainer = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      image: "https://dordoi.kg/media/upload/news/original/93_913.jpg",
      title: t("main.university"),
      description: t("main.degree"),
      year: t("main.year"),
    },
    {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/C4E0BAQGyVdZHqRl-eg/company-logo_200_200/company-logo_200_200/0/1675181023089/geektechkg_logo?e=2147483647&v=beta&t=v7IGVp-abixoht94rVXgY_AWKxOO-q917QVIlrvzT4Y",
      title: t("main.course"),
      description: t("main.certificate"),
      year: t("main.year"),
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNs6xELizUsKPxead-RJne3N22N4JQcjSauw&s",
      title: t("main.course2"),
      description: t("main.certificate2"),
      year: t("main.year2"),
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <h1 className={styles.title}>{t("main.education")}</h1>
      <div className={styles.educationList}>
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id} className={styles.educationItem}>
            <img src={course.image} alt={course.title} className={styles.image} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span>{course.year}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
