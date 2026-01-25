"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const tools = {
  "Data & Analyse": ["Python", "R", "SQL", "Excel", "VBA"],
  "Machine Learning & IA": ["TensorFlow", "PyTorch", "Spark"],
  "Data Visualisation": ["Power BI", "Tableau"],
  "Databases & Cloud": ["MySQL", "MongoDB", "AWS"],
  "Tools & Dev": ["Git", "Docker", "VS Code"],
  "Gestion de projets": ["Trello", "Jira", "Confluence"],
};

function ToolBadge({ name }) {
  return (
    <motion.span
      variants={fadeInUp}
      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 transition-colors"
    >
      {name}
    </motion.span>
  );
}

export default function Outils() {
  return (
    <motion.section
      id="tools"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Outils & technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les technologies que j’utilise pour analyser, modéliser et livrer des
            solutions data-driven.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(tools).map(([category, toolList]) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {toolList.map((tool) => (
                  <ToolBadge key={tool} name={tool} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
