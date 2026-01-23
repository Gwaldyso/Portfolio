"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-semibold text-gray-900">
            shivesh<span className="text-teal-500">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}