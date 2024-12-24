import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedScrollComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
      },
      {
        threshold: 0.1, 
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current); 
      }
    };
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: isVisible ? 50 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedScrollComponent;
    