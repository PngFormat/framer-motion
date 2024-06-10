import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import '../styles/header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="header-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="logo-container">
                <motion.div className="logo-text">
                    Motion Company
                </motion.div>
                <img
                    className="logo-image"
                    alt="logo"
                    src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png"
                />
            </div>
            <motion.div
                className="menu-button"
                onClick={toggleList}
            >
                <motion.button
                    whileHover={{ scale: 1.2 }}
                >
                    Feature 1
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                >
                    Feature 2
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                >
                    Feature 3
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Header;
