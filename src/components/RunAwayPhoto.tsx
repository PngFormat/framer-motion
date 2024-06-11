import React, { useRef } from 'react';
import '../styles/runAwayPhoto.css';

interface RunawayPhotoProps {
    src: string;
    alt: string;
}

const RunawayPhoto: React.FC<RunawayPhotoProps> = ({ src, alt }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const img = imgRef.current;
        if (img) {
            const imgRect = img.getBoundingClientRect();
            const imgX = imgRect.left + imgRect.width / 2;
            const imgY = imgRect.top + imgRect.height / 2;

            const deltaX = imgX - e.clientX;
            const deltaY = imgY - e.clientY;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            const moveX = (deltaX / distance) * 50;
            const moveY = (deltaY / distance) * 50;

            img.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    };

    const handleMouseLeave = () => {
        const img = imgRef.current;
        if (img) {
            img.style.transform = 'translate(0, 0)';
        }
    };

    return (
        <div className="runaway-photo-container">
            <div className="text-between-cards">
                <p className="text-photo">
                    Photography is a powerful medium that transcends language, capturing moments, emotions, and stories
                    with the
                    click of a shutter. It is an art form that freezes time, allowing us to relive and share
                    experiences,
                    communicate ideas, and appreciate the beauty that surrounds us.
                </p>
                <p className="text-photo">
                    Photography is a powerful medium that transcends language, capturing moments, emotions, and stories
                    with the
                    click of a shutter. It is an art form that freezes time, allowing us to relive and share
                    experiences,
                    communicate ideas, and appreciate the beauty that surrounds us.
                </p>
            </div>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                className="runaway-photo"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
};

export default RunawayPhoto;
