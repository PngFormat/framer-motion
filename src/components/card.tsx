import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CardComponent.css';

const cardData = [
    { image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'img1.' },
];

const CardComponent = () => {
    return (
        <div className="card-container">
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
                    <p>This is some text between cards.</p>
                </div>
            </div>
            <div className='card-beetween'>
            <div className="text-between-cards">
                <p>This is some text between cards.</p>
            </div>
            {cardData.map((card, index) => (
                <motion.div
                    key={index}
                    className="card"
                    whileHover={{ scale: 1.1, rotate: 120, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {card.image && <img src={card.image} alt={`Image ${index + 1}`} />}
                    <p>{card.text}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
};

export default CardComponent;
