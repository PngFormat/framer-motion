import { motion } from 'framer-motion';
import React from 'react';

const Brands = () => {
    return (
        <div>
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
                <img width={300} height={200} alt='brand1' src='https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg'></img>
                <img width={300} height={200} alt='brand1' src='https://expertphotography.b-cdn.net/wp-content/uploads/2021/07/photography-branding-tips.jpg'></img>
                <img width={300} height={200} alt='brand1' src='https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg'></img>
                <img width={300} height={200} alt='brand1' src='https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg'></img>
                <img width={300} height={200} alt='brand1' src='https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg'></img>
                <img width={300} height={200} alt='brand1' src='https://assets-global.website-files.com/64fb9e01844ff7d2dd1fa177/651385d3a9a71dc3b47d4d37_64fb9e01844ff7d2dd1fa39e_Untitled_Artwork%252B3.jpeg'></img>
            </motion.div>/
        </div>
    );
};

export default Brands;