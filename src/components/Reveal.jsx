// src/components/Reveal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // Starts further down for a longer travel path
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2.0,           // Very slow, deliberate motion
                ease: [0.16, 1, 0.3, 1], // "Ease-out-expo" for a smooth deceleration finish
            }}
            viewport={{ once: true, amount: 0.1 }} // Triggers earlier so you see the start of the motion
        >
            {children}
        </motion.div>
    );
};

export default Reveal;