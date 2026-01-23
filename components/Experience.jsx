"use client"

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

const experiences = [
  {
    title: 'Senior Data Scientist',
    company: 'Tech Corp Inc.',
    period: '2023 - Present',
    description: [
      'Lead a team of 4 data scientists on customer analytics projects',
      'Developed ML models that increased revenue by $2M annually',
      'Built automated data pipelines processing 10TB+ daily',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Analytics Solutions',
    period: '2021 - 2023',
    description: [
      'Created dashboards and reports for C-level executives',
      'Performed A/B testing and statistical analysis',
      'Reduced report generation time by 60% through automation',
    ],
  },
  {
    title: 'Junior Data Analyst',
    company: 'StartUp Hub',
    period: '2019 - 2021',
    description: [
      'Analyzed user behavior data to improve product features',
      'Built SQL queries and data models for business intelligence',
      'Collaborated with product team on data-driven decisions',
    ],
  },
];

function ExperienceItem({
  title,
  company,
  period,
  description,
  isLast = false,
}) {
  return (
    <motion.div variants={fadeInUp} className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gray-200" />
      )}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-sm font-mono text-gray-500">{period}</span>
        </div>
        <p className="text-teal-600 font-medium">{company}</p>
        <ul className="space-y-1.5 pt-2">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 flex items-start gap-2"
            >
              <span className="text-teal-500 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
        </motion.div>
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
