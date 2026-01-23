"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

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

const projects = [
  {
    title: 'Customer Churn Prediction',
    description:
      'Built a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Sales Dashboard Analytics',
    description:
      'Interactive dashboard visualizing sales performance metrics, trends, and forecasts for executive decision-making.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Tableau', 'SQL', 'Python', 'ETL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'NLP Sentiment Analysis',
    description:
      'Deep learning model for analyzing customer reviews sentiment, processing 100K+ reviews with 91% accuracy.',
    image:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'NLP', 'BERT'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Time Series Forecasting',
    description:
      'Developed ARIMA and Prophet models for demand forecasting, reducing inventory costs by 23%.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tags: ['Python', 'Prophet', 'ARIMA', 'Plotly'],
    github: '#',
    demo: '#',
  },
];

function ProjectCard({ title, description, image, tags, github, demo }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
        },
      }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-gray-50 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {github && (
            <a
              href={github}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-teal-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-teal-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of data science projects showcasing my analytical and
            technical capabilities
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}