import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Board = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 100) {
            controls.start({ opacity: 0, y: 10});
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
        >
        </motion.div>
    );
};

export default Board;
