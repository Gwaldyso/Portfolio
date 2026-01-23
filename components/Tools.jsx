"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const tools = [
  'Python',
  'R',
  'SQL',
  'Jupyter',
  'VS Code',
  'Git',
  'Docker',
  'AWS',
  'Tableau',
  'Power BI',
  'Excel',
  'Spark',
];

function ToolBadge({ name }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm"
    >
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}

export default function Tools() {
  return (
    <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="tools">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tools I Work With
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <ToolBadge key={tool} name={tool} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}