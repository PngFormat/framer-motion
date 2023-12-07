import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import '../index.css'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

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
                marginLeft:'10px',
                marginRight:'10px'
            }}

        >
            <div className='card-beetween'>
            <motion.div
            >
                Motion Company
            </motion.div>

            <img width='60' height='10' alt='logo' src='data:image/png;base64,iVBORw0KG
            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'/>
        </div>
            <div className="dropdown-container">
                <button   style={{
                    padding: '10px',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                }} onClick={toggleList}>More</button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="dropdown-list"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{
                                padding: '10px',
                                fontSize: '16px',
                                margin: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <motion.div
                                className="list-item"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                Item 1
                            </motion.div>
                            <motion.div
                                className="list-item"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                            >
                                Item 2
                            </motion.div>
                            <motion.div
                                className="list-item"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
                            >
                                Item 3
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
<div className='space-beetween'>


            <motion.button
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                }}
                whileHover={{ marginLeft: '-20px' }}
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
                whileHover={{ marginLeft: '20px' }}
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
        whileHover={{ marginLeft: '20px' }}
    >
        Click me
    </motion.button>

</div>
        </motion.div>
    );
};

export default Header;
