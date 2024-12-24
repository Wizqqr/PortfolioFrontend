import React, { useState } from "react";
import styles from './ContactContainer.module.scss';
import { useTranslation } from "react-i18next";
import axios from 'axios';

export const ContactContainer = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await axios.post('https://portofliobackend.onrender.com/contact', formData);

            if (response.status === 200) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred.");
        }
    };

    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.heading}>{t("main.contact")}</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("main.nameContact")}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("main.email")}
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("main.message")}
                    rows="5"
                />
                <button type="submit">{t("main.send")}</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};
