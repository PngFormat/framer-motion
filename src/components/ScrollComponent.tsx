import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://www.pangolinphoto.com/wp-content/uploads/2020/05/Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-scaled.webp',
        alt: 'Image 1',
        text: 'Text 1',
    },
    {
        src: 'https://www.adorama.com/alc/wp-content/uploads/2021/07/Photography-for-Beginners.jpg',
        alt: 'Image 2',
        text: 'Text 2',
    },
    {
        src: 'https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1NDA2MjN8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 3',
        text: 'Text 3',
    },
];

const ScrollComponent = () => {
    const [visibleImageIndex, setVisibleImageIndex] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const imageHeight = window.innerHeight;

        // Определите индекс изображения, основываясь на позиции скролла
        const index = Math.floor(scrollPosition / imageHeight);

        // Обновите состояние только если индекс изменился
        if (index !== visibleImageIndex) {
            setVisibleImageIndex(index);
        }
    };

    useEffect(() => {
        // Добавьте слушатель события скролла при монтировании компонента
        window.addEventListener('scroll', handleScroll);

        // Очистите слушатель события скролла при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleImageIndex]); // Зависимость useEffect - visibleImageIndex

    return (
        <div style={{ height: '100vh' }}>
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleImageIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ height: '50vh' }}
                >
                    {image && image.src && (
                        <>
                            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
                            <p>{image.text}</p>
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default ScrollComponent;
