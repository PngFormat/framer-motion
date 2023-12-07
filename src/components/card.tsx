// CardComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CardComponent.css';

const cardData = [
    { image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'img1.' },
    { text: 'img2', image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
    // Add more data as needed
];

const CardComponent = () => {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <motion.div
                    key={index}
                    className="card"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    {card.image && <img src={card.image} alt={`Image ${index + 1}`} />}
                    <p>{card.text}</p>
                </motion.div>
            ))}
            <div className="text-between-cards">
                <p>This is some text between cards.</p>
            </div>
            {cardData.map((card, index) => (
                <motion.div
                    key={index}
                    className="card"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    {card.image && <img src={card.image} alt={`Image ${index + 1}`} />}
                    <p>{card.text}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default CardComponent;
