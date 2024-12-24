import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectsContainer.module.scss";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Frontend from "../../images/consultant.png";
import UxUi from "../../images/it-department.png";
import Crypto from '../../images/Снимок экрана 2024-12-15 153408.png'
import SalymbekovReact from '../../images/Снимок экрана 2024-12-15 192357.png'
import TelegramBot from '../../images/telegram.webp'
import Blog from '../../images/image.png'
import Django from '../../images/django.jpg'
const projects = [
    { id: 2, img: SalymbekovReact, title: "SalymbekovCollege", description: "Frontend project (React).", category: "Frontend" },
    { id: 3, img: Blog, title: "BlogProject", description: "FullStack project (MERN).", category: "Fullstack" },
    { id: 5, img: Crypto, title: "CryptoCurrency", description: "FullStack project (MERN).", category: "Fullstack" },
    { id: 6, img: Django, title: "PhoneStore", description: "Backend project (Django).", category: "Backend" },
    // { id: 7, img: Frontend, title: "SalymbekovCollege", description: "FullStack project (MERN).", category: "Fullstack" },
    { id: 8, img: TelegramBot, title: "TelegramBot", description: "Bot project (Aiogram).", category: "Backend" },

];

export const ProjectsContainer = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <>
            {/* Projects Section */}
            <div className={styles.projectsSection}>
                <h1>{t("main.projects")}</h1>
                <p>{t("main.projectDescription")}</p>
                <div className={styles.filterButtons}>
                    <button onClick={() => setSelectedCategory("All")}>All</button>
                    <button onClick={() => setSelectedCategory("Backend")}>Backend</button>
                    <button onClick={() => setSelectedCategory("Frontend")}>Frontend</button>
                    <button onClick={() => setSelectedCategory("Fullstack")}>Fullstack</button>
                </div>
                <div className={styles.carousel}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <img src={project.img} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
