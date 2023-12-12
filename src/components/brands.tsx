import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

const Brands = () => {
    const [imageSrc, setImageSrc] = useState('https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg');
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const handleImageChange = () => {
        setImageSrc('https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg');
    };

    return (
        <div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                transition={{ duration: 1 }}
                style={{
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
                }}
            >
                <div className="stripes"></div>
                <motion.img
                    width={300}
                    height={200}
                    alt='brand1'
                    src={imageSrc}
                    onLoad={() => handleImageChange()}
                ></motion.img>
            </motion.div>
        </div>
    );
};

export default Brands;
