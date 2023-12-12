import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrolImageChange = () => {
    const [imageSrc, setImageSrc] = useState('https://example.com/image1.jpg');
    const scrollRef = useRef(null);
    const controls = useAnimation();


    const getRandomText = () => {
        const texts = ['Capturing Serenity:\n' +
        'This breathtaking photo encapsulates a moment of pure serenity, as the golden hues of the sunset dance on the calm waters. A tranquil scene that invites you to pause, breathe, and immerse yourself in the beauty of nature.' +
        '', 'Urban Elegance:\n' +
        'The cityscape captured in this photo tells a story of urban elegance. Glittering skyscrapers against the night sky, reflecting the dynamic energy of a bustling metropolis. A visual symphony of lights and shadows.' +
        '', 'Whispers of History:\n' +
        'In this evocative photo, ancient architecture whispers tales of history. Each weathered stone is a silent storyteller, narrating the passage of time. A glimpse into the past that sparks curiosity and nostalgia.' +
        '']; // Add more text options as needed
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 500) {
                setImageSrc('data:image/jpeg;base64,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');
            } else if (scrollPosition < 1000) {
                setImageSrc('https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg');
            } else {
                setImageSrc('https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });
    }, [controls]);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                transition={{ duration: 1 }}
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="stripes"></div>
                <p style={{ color: 'white',textAlign: 'center',fontSize:'40px' }}>{getRandomText()}</p>
            </motion.div>


        </div>
    );
};

export default ScrolImageChange;
