import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';
import '../styles/tablePhoto.css';

const TablePhoto = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrcList] = useState([
        {
            src: 'https://media.istockphoto.com/id/1361406631/photo/a-man-photographer-with-a-camera-takes-a-photo-in-the-dark-copy-space.jpg?s=612x612&w=is&k=20&c=FrvXoUraoDCJiC5-ryb9CYf1sqdtA7snVBx9YyHIpzE=',
            text: 'Description for Photo 2'
        },
        {
            src: 'https://media.istockphoto.com/id/510857771/photo/boy-with-old-camera.jpg?s=612x612&w=is&k=20&c=DbEbb2rdIjhumwmHE0y7GoSJbXqKsLJ-hZ99aGcU8lQ=',
            text: 'Description for Photo 3'
        },
    ]);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY - 350 ;
            const documentHeight = document.documentElement.scrollHeight;
            const range = documentHeight / imageSrcList.length;
            const newIndex = Math.floor(scrollY / range);
            setImageIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [imageSrcList.length]);

    return (
        <div className="table-photo-container">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: -50}}
                animate={controls}
                transition={{duration: 1}}
                className="table-photo-motion-container"
            >
                {imageSrcList.map((image, index) => (
                    <div
                        className="photo-container"
                        key={index}
                        style={{
                            opacity: index === imageIndex ? 1 : 0,
                            pointerEvents: index === imageIndex ? 'auto' : 'none'
                        }}
                    >
                        <motion.div
                            className="photo-and-text-container"
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }}
                        >
                            <motion.img
                                width={700}
                                height={500}
                                alt={`Photo ${index + 1}`}
                                src={image.src}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}
                                className="photo"
                            />
                            <motion.div
                                initial={{opacity: 0, x: -50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 1}}
                                className="text-block-left"
                            >
                                <h2>Title Left</h2>
                                <p>Description Left</p>
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TablePhoto;
