import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2.5,           // Increased for a more "premium" slow feel
                delay: delay,            // Allows for staggered animations
                ease: [0.22, 1, 0.36, 1], // A slightly smoother "ease-out-cubic" variant
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;