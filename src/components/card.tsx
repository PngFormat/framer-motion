import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/CardComponent.css';

const cardData = [
    {
        image:
            'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        text: 'img1.',
    },
];

const CardComponent = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        const element = document.querySelector('.card-container');
        if (element) {
            const isInViewport = element.getBoundingClientRect().top < window.innerHeight / 2;
            if (isInViewport) {
                controls.start({ opacity: 1, y: 0 });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.div
            className="card-container"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className="card-beetween">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        whileHover={{ scale: 1.1, rotate: 360, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {card.image && <img src={card.image} alt={`Image ${index + 1}`} />}
                        <p>{card.text}</p>
                    </motion.div>
                ))}
                <div className="text-between-cards">
                    <p>
                        Photography is a powerful medium that transcends language, capturing moments, emotions, and stories with the
                        click of a shutter. It is an art form that freezes time, allowing us to relive and share experiences,
                        communicate ideas, and appreciate the beauty that surrounds us.
                    </p>
                </div>
            </div>
            <div className="card-beetween">
                <div className="text-between-cards">
                    <p>
                        Photography is a powerful medium that transcends language, capturing moments, emotions, and stories with the
                        click of a shutter. It is an art form that freezes time, allowing us to relive and share experiences,
                        communicate ideas, and appreciate the beauty that surrounds us.
                    </p>
                </div>
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        whileHover={{ scale: 1.2, rotate: -120, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {card.image && <img src={card.image} alt={`Image ${index + 1}`} />}
                        <p>{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CardComponent;
