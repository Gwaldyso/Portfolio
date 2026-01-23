"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}