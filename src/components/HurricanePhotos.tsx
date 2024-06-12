import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import '../styles/hurricanePhotos.css';

interface Photo {
    src: string;
    alt: string;
}

const photoList: Photo[] = [
    {
        src: 'https://pngimg.com/d/photo_camera_PNG7842.png',
        alt: 'Photo 1',
    },
    {
        src: 'https://pngimg.com/uploads/photo_camera/photo_camera_PNG7853.png',
        alt: 'Photo 2',
    },
    {
        src: 'https://www.pngall.com/wp-content/uploads/13/Digital-Camera-PNG-Clipart.png',
        alt: 'Photo 3',
    },
];

const HurricanePhotos: React.FC = () => {
    const [positions, setPositions] = useState(photoList.map(() => ({ x: 0, y: 0 })));
    const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const maxX = 700;
            const maxY = 200;

            setPositions(positions.map(() => ({
                x: Math.random() * maxX,
                y: Math.random() * maxY,
            })));

            setTextPosition({
                x: Math.random() * maxX,
                y: Math.random() * maxY,
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [positions]);

    return (
        <div className="hurricane-photo-container">
            {photoList.map((photo, index) => (
                <motion.img
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    className="hurricane-photo"
                    animate={{
                        x: positions[index].x,
                        y: positions[index].y,
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                />
            ))}
            <motion.div
                className="floating-text"
                animate={{
                    x: textPosition.x,
                    y: textPosition.y,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <p className="text-photo2">
                    Photography is a powerful medium that transcends language, capturing moments, emotions, and stories
                    with the
                    click of a shutter. It is an art form that freezes time, allowing us to relive and share
                    experiences,
                    communicate ideas, and appreciate the beauty that surrounds us.
                </p>
            </motion.div>
        </div>
    );
};

export default HurricanePhotos;
