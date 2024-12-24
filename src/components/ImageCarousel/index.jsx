import React, { useRef } from 'react';
import styles from './ImageCarousel.module.scss';

export const ImageSection = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        const carousel = carouselRef.current;
        const scrollAmount = 300; 
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const carousel = carouselRef.current;
        const scrollAmount = 300;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.scrollButton} onClick={scrollLeft}>←</button>
            <div className={styles.imagesSection} ref={carouselRef}>
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2745-1024x683.jpg" alt="Example 1" />
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-1024x683.jpg" alt="Example 3" />
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2487-1024x683.jpg"></img>               
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2741-1024x683.jpg"></img>  
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2727-300x200.jpg"></img>  
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2694-300x200.jpg"></img>  
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2476-300x200.jpg"></img>  
                <img src="https://salymbekov.com/wp-content/uploads/2022/07/photo_2022-07-18_15-21-07-1024x682.jpg" alt="Example 4" />
            </div>
            <button className={styles.scrollButton} onClick={scrollRight}>→</button>
        </div>
    );
};
