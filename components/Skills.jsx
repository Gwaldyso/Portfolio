"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const skills = [
    {
        name: 'Python',
        level: 95,
    },
    {
        name: 'SQL',
        level: 90,
    },
    {
        name: 'R',
        level: 85,
    },
    {
        name: 'Machine Learning',
        level: 88,
    },
    {
        name: 'Data Visualization',
        level: 92,
    },
    {
        name: 'Statistics',
        level: 87,
    },
    {
        name: 'Pandas / NumPy',
        level: 93,
    },
    {
        name: 'TensorFlow / PyTorch',
        level: 80,
    },
    {
        name: 'Tableau / Power BI',
        level: 85,
    },
];

function SkillBadge({ name, level }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-50px',
    });

    const getProficiency = (level) => {
        if (level >= 90)
            return {
                label: 'Expert',
                dots: 4,
                color: 'bg-teal-500',
            };
        if (level >= 80)
            return {
                label: 'Advanced',
                dots: 3,
                color: 'bg-teal-400',
            };
        if (level >= 70)
            return {
                label: 'Proficient',
                dots: 2,
                color: 'bg-gray-400',
            };
        return {
            label: 'Intermediate',
            dots: 1,
            color: 'bg-gray-300',
        };
    };

    const proficiency = getProficiency(level);

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                    }
                    : {
                        opacity: 0,
                        scale: 0.9,
                    }
            }
            transition={{
                duration: 0.3,
            }}
            className="group relative bg-white p-5 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300"
        >
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
                <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                scale: 0,
                            }}
                            animate={
                                isInView
                                    ? {
                                        scale: 1,
                                    }
                                    : {
                                        scale: 0,
                                    }
                            }
                            transition={{
                                delay: 0.1 * i,
                                duration: 0.2,
                            }}
                            className={`w-1.5 h-1.5 rounded-full ${i < proficiency.dots ? proficiency.color : 'bg-gray-200'}`}
                        />
                    ))}
                </div>
            </div>
            <span className="inline-block px-2.5 py-1 text-xs font-medium text-teal-700 bg-teal-50 rounded-full">
                {proficiency.label}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <motion.section
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
            id="skills"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
                    <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
                        Technical Skills
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        My Expertise
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive toolkit for tackling complex data challenges
                    </p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                        <SkillBadge
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}