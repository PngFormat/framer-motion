import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';
import '../styles/brands.css';

const Brands = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrcList] = useState([
        'https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg',
        'https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
        'https://www.freeiconspng.com/uploads/circle-photography-man-logo-png-4.png'
    ]);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % imageSrcList.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [imageSrcList.length]);

    return (
        <div className="brands-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="brands-motion-container"
            >
                <div className="stripes"></div>
                <motion.img
                    width={300}
                    height={200}
                    alt='brand1'
                    src={imageSrcList[imageIndex]}
                    initial={{ opacity: 0, scale: 0.8, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                ></motion.img>
            </motion.div>
        </div>
    );
};

export default Brands;
