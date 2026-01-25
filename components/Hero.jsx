"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Gwaldys from '../public/IMG1.png';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm text-teal-700 font-medium">
                Disponible pour des missions freelance et CDI !
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bonjour, Je suis <span className="text-teal-500">Gwaldys</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              Ingénieure Data & Intelligence Artificielle 

            </p>
            <p className="text-gray-600 leading-relaxed max-w-lg">
          
              À la croisée de la rigueur d’ingénierie et de la compréhension métier, j’accompagne les organisations de la donnée brute jusqu’à l’impact opérationnel.
           
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Mes projets
                <ChevronDownIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                Contactez-moi
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg overflow-hidden">
                <Image
                  src={Gwaldys}
                  alt="Gwaldys - Data Scientist"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
              >
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-500">ans d'expérience</div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
              >
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-500">projets réalisés</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}