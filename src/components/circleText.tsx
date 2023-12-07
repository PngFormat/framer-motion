import { motion } from 'framer-motion';
import React, {useState} from 'react';

const CircleText = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className="parent"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div layout className="child" />
            </motion.div>
        </div>
    );
};

export default CircleText;