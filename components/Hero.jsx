"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, MailIcon } from 'lucide-react';

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
                Available for opportunities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-teal-500">Shivesh</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              Data Scientist & Analytics Expert
            </p>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              I transform complex data into actionable insights. With 5+ years
              of experience in machine learning, statistical analysis, and data
              visualization, I help businesses make data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                View Projects
                <ChevronDownIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                Contact Me
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
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Shivesh - Data Scientist"
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
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
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
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500">Projects Done</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}