import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// @ts-ignore
const ContainerPhoto = ({ imageSrc, children }) => {
    const controls = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 100) {
            controls.start({ opacity: 0, y: 10 });
        } else {
            controls.start({ opacity: 1, y: 10 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="container-photo"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
                height: '300px',
                textAlign: 'center',
                backgroundColor: 'gray',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${imageSrc})`,
            }}
        >
            {children}
        </motion.div>
    );
};

export default ContainerPhoto;
