"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Tes vrais projets
const projects = [
  {
    title: "Optimisation de la retouchabilité de pièces industrielles",
    subtitle: "Data Science industrielle · Aide à la décision",
    description:
      "Projet industriel visant à estimer la probabilité de re-conformité de pièces non conformes afin d’améliorer la prise de décision en atelier et réduire le gaspillage.",
    highlights: [
      "Structuration et fiabilisation de données industrielles hétérogènes",
      "Feature engineering orienté métier et contraintes terrain",
      "Modélisation prédictive pour éclairer la décision humaine",
      "Restitution des résultats sous forme d’indicateurs compréhensibles",
    ],
    stack: ["Python", "NoSQL", "Data Science", "Industrial Data"],
    impact:
      "Réduction du gaspillage, meilleure anticipation des retouches et décisions plus homogènes.",
    github: "",
    demo: "",
    caseStudy: "/projects/safran-retouchabilite",
    image: "/project-safran.png",
    confidential: true,
  },
  {
    title: "Chatbot RAG – Support & contenu de cours",
    subtitle: "IA Générative · NLP",
    description:
      "Assistant intelligent capable de répondre aux questions en combinant réponse directe, recherche documentaire (RAG) et lecture de fichiers.",
    highlights: [
      "Pipeline RAG : ingestion de documents, embeddings et retrieval",
      "Orchestration d’agents et gestion des sources",
      "Focus sur la qualité des réponses et la robustesse",
    ],
    stack: ["Python", "LangChain", "LLM", "Vector DB"],
    impact: "Accès plus rapide à l’information et réduction du temps de recherche.",
    github: "https://github.com/Gwaldyso/01-llm-rag-chatbot",
    demo: "",
    caseStudy: "/projects/rag-chatbot",
    image: "/project-rag.png",
  },
  {
    title: "Dashboard décisionnel – Analyse & reporting Netflix",
    subtitle: "Business Intelligence · Pilotage",
    description:
      "Analyse exploratoire et création d’un dashboard décisionnel à partir des données Netflix pour faciliter le suivi des indicateurs clés.",
    highlights: [
      "Exploration et structuration des données",
      "Création d’indicateurs pertinents pour le pilotage",
      "Visualisations claires orientées décision",
    ],
    stack: ["Power BI", "SQL", "Excel"],
    impact: "Meilleure lisibilité des KPIs et compréhension des tendances.",
    github: "https://github.com/Gwaldyso/04-powerbi-Netflix",
    demo: "",
    caseStudy: "/projects/netflix-dashboard",
    image: "/project-netflix.png",
  },
  {
    title: "Shopping Time Prediction",
    subtitle: "Machine Learning · Prédiction comportementale",
    description:
      "Modèle de prédiction du temps passé par un client lors d’une session d’achat en ligne, à partir de données comportementales.",
    highlights: [
      "Analyse exploratoire et préparation des données",
      "Feature engineering sur les comportements utilisateurs",
      "Entraînement et évaluation de modèles prédictifs",
    ],
    stack: ["Python", "Pandas", "scikit-learn"],
    impact:
      "Meilleure compréhension du comportement client et potentiel d’optimisation des parcours.",
    github: "https://github.com/Gwaldyso/05-shopping-time-prediction",
    demo: "",
    caseStudy: "/projects/shopping-time-prediction",
    image: "/project-shopping.png",
  },
];

function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  stack,
  impact,
  github,
  demo,
  image,
  confidential,
}) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* ✅ Image immersive avec zoom */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        {/* léger overlay pour le contraste */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2">
          {subtitle && (
            <p className="text-sm font-mono text-teal-600">{subtitle}</p>
          )}

          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {confidential && (
            <p className="text-xs font-mono text-red-500">
              🔒 Projet industriel confidentiel
            </p>
          )}

          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Highlights */}
        {highlights?.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-gray-50 text-gray-600 rounded-full border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        {impact && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Impact :</span>{" "}
            {impact}
          </p>
        )}

        {/* Liens (sans case study) */}
        <div className="flex gap-4 pt-2 mt-auto items-center">
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

          {demo ? (
            <a
              href={demo}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-teal-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Démo
            </a>
          ) : (
            <span className="text-sm text-gray-400">Démo bientôt</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}


export default function Projects() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Projets
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Réalisations & études de cas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection de projets data & IA orientés "IMPACT" : de l’analyse à la
            décision.
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
