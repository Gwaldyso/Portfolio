"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeIcon,
  DatabaseIcon,
  BrainCircuitIcon,
  BarChart3Icon,
} from 'lucide-react';

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

const stats = [
  {
    icon: <CodeIcon className="w-6 h-6" />,
    label: 'Clean Code',
    value: '10K+ Lines',
  },
  {
    icon: <DatabaseIcon className="w-6 h-6" />,
    label: 'Data Processed',
    value: '100TB+',
  },
  {
    icon: <BrainCircuitIcon className="w-6 h-6" />,
    label: 'ML Models',
    value: '30+',
  },
  {
    icon: <BarChart3Icon className="w-6 h-6" />,
    label: 'Dashboards',
    value: '50+',
  },
];

export default function About() {
  return (
    <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div variants={fadeInUp} className="space-y-4">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Turning Data Into Decisions
          </h2>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-600 leading-relaxed"
        >
          I'm a passionate data scientist with expertise in machine learning,
          statistical modeling, and data visualization. My journey started with
          a curiosity about patterns hidden in numbers, which led me to pursue a
          career in data science.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-600 leading-relaxed"
        >
          I specialize in building predictive models, creating insightful
          dashboards, and developing data pipelines that help organizations
          leverage their data assets. I believe in the power of data to
          transform businesses and drive innovation.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-4 bg-gray-50 rounded-2xl">
              <div className="text-teal-500 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}