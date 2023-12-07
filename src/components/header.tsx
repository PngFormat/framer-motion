import { motion } from 'framer-motion';
import React from 'react';


const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.70, backgroundColor: 'lightgray' }}
            style={{
                textAlign: 'center',
                backgroundColor: 'gray',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <motion.div
                whileHover={{ marginRight: '20px' }} // Move to the right on hover
            >
                Motion Company
            </motion.div>

            <motion.button
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                }}
                whileHover={{ marginLeft: '-20px' }} // Move to the left on hover
            >
                Click me
            </motion.button>

            <motion.button
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                }}
                whileHover={{ marginLeft: '20px' }} // Move to the right on hover
            >
                Click me
            </motion.button>
        </motion.div>
    );
};

export default Header;
