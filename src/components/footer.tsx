import { motion } from 'framer-motion';
import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container">
                <motion.div
                    className="footer-section"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h3>About Us</h3>
                    <p>We are a team of passionate photographers and designers.</p>
                </motion.div>
                <motion.div
                    className="footer-section"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h3>Contact</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </motion.div>
                <motion.div
                    className="footer-section"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="Facebook" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="Twitter" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
