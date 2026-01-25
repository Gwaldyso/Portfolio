"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    role: "Apprentie Data Scientist",
    company: "Safran Aircraft Engines",
    location: "Colombes",
    period: "10.2022 — 12.2023",
    highlights: [
      "Conception et mise en place d’une base NoSQL pour centraliser et fiabiliser les données atelier",
      "Automatisation de l’alimentation des données via pipelines CI/CD (Jenkins) et scripts Python",
      "Développement d’outils d’aide à la décision pour améliorer les pratiques en atelier",
      "Implémentation d’algorithmes permettant d’anticiper les non-conformités",
      "Impact : réduction du gaspillage et revalorisation de pièces initialement considérées comme rebutées",
    ],
  },
  {
    role: "Planner – Gestion opérationnelle & coordination terrain Paris JO 2024",
    company: "GL events",
    location: "Paris",
    period: "04.2024 — 08.2024",
    highlights: [
      "Audit des écarts entre planning théorique et réalité terrain, avec ajustements en temps réel",
      "Élaboration de rétroplannings détaillés pour les livraisons, montages et démontages",
      "Coordination avec les site managers pour résoudre les imprévus logistiques (retards, changements de dernière minute)",
      "Suivi rigoureux des échéances dans un contexte à fortes contraintes opérationnelles",
      "Renforcement des compétences en organisation, communication transverse et prise de décision rapide",
    ],
  },
  {
    role: "Stage Data Quality Analyst",
    company: "Bpifrance",
    location: "Paris",
    period: "04.2022 — 09.2022",
    highlights: [
      "Centralisation et fiabilisation de données sectorielles pour le suivi des projets financés",
      "Analyse du plan de relance de l’industrie automobile via Power BI",
      "Conception d’un outil d’aide à la décision pour identifier les projets éligibles aux aides vertes",
      "Impact : réduction de 30 % du temps de traitement des dossiers pour la DFI",
    ],
  },
  {
    role: "Stage Data Manager",
    company: "Hutchinson",
    location: "Bondoufle",
    period: "04.2021 — 08.2021",
    highlights: [
      "Migration et nettoyage des données issues de l’ERP TopSolid",
      "Développement d’un outil VBA pour la synthèse des ratios de production",
      "Standardisation et fiabilisation des données industrielles",
      "Impact : réduction de 90 % du temps de traitement et des erreurs de saisie",
    ],
  },
  {
    role: "Stage Data Visualisation",
    company: "Omnicom Media Group",
    location: "Boulogne-Billancourt",
    period: "06.2019 — 09.2019",
    highlights: [
      "Optimisation d’un outil de suivi des KPIs de campagnes publicitaires",
      "Alimentation et mise à jour de bases de données issues d’études marketing",
      "Amélioration de la lisibilité des indicateurs pour les équipes data et métiers",
      "Impact : amélioration de 25 % de la réactivité des équipes",
    ],
  },
  {
    role: "Stage Data Manager",
    company: "Airbus Operations SAS",
    location: "Toulouse",
    period: "04.2018 — 06.2018",
    highlights: [
      "Création d’un outil de synthèse VBA Excel pour standardiser les traitements",
      "Modélisation et gestion des données avec SQL Server",
      "Automatisation de tâches répétitives et fiabilisation des données",
      "Impact : gain de 45 minutes par traitement et amélioration de la cohérence des données",
    ],
  },
];

function ExperienceItem({
  role,
  company,
  location,
  period,
  highlights,
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
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <h3 className="font-semibold text-gray-900">{role}</h3>
          <span className="text-sm font-mono text-gray-500">{period}</span>
        </div>

        <p className="text-teal-600 font-medium">
          {company}
          {location ? (
            <span className="text-gray-400 font-normal"> · {location}</span>
          ) : null}
        </p>

        <ul className="space-y-1.5 pt-2">
          {highlights.map((item, index) => (
            <li
              key={`${company}-${period}-${index}`}
              className="text-sm text-gray-600 flex items-start gap-2"
            >
              <span className="text-teal-500 mt-1">•</span>
              <span>{item}</span>
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Carrières
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Expériences professionnelles
          </h2>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${exp.period}-${exp.role}`}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
