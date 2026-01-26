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
            À propos de moi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ingénieure Data & Intelligence Artificielle
          </h2>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-600 leading-relaxed"
        >
          
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="text-sm text-gray-600 leading-relaxed space-y-4"
        >
          <p>
            Je m’appelle Gwaldys, ingénieure en Big Data & Intelligence Artificielle,
            passionnée par la manière dont la donnée peut transformer des situations
            complexes en décisions claires et actionnables.J’ai construit mon parcours
            avec exigence et curiosité, à travers un diplôme d’ingénieure en Big Data
            Analytics à CY Tech (ex-EISTI) et un Master 2 en Data & IA à HETIC. Ces
            expériences m’ont permis de développer une approche à la fois rigoureuse et
            pragmatique de la data.
          </p>

          <p>
            Au fil de mes missions en tant que Data Manager, Data Analyst et Data
            Scientist, notamment en environnement industriel chez Safran,j’ai appris à
            travailler sur des projets concrets, soumis à de fortes contraintes métiers.
            J’y ai développé une conviction forte : une solution data n’a de valeur que
            si elle est comprise, utilisée et utile sur le terrain.
          </p>

          <p>
            Récemment certifiée en IA générative, je m’oriente aujourd’hui vers ce domaine
            en plein essor avec l’envie de concevoir des solutions innovantes,
            responsables et orientées impact.Mon objectif est d’aider les organisations
            à prendre des décisions stratégiques alignées avec leur réalité
            opérationnelle, grâce à des approches data-driven.
          </p>

          <p>
            À travers ce portfolio,je partage ma manière de penser, de structurer et de
            résoudre des problématiques grâce à la data et à l’intelligence artificielle.
          </p>

          <p className="signature">
            <strong>Data & IA</strong> pour des décisions utiles et responsables.
          </p>
        </motion.div>
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