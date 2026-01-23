"use client";

import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Shivesh. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}