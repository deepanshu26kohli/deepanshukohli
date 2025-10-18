import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

const experiences = [
  {
    icon: Rocket,
    year: '2025 - Present',
    title: 'Learning AI & Vector Database Specialist',
    company: 'Freelance / Personal Projects',
    description: 'Building AI-powered applications with vector databases and MCP servers. Implementing semantic search and intelligent data processing solutions.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Briefcase,
    year: '2023 - 2025',
    title: 'Full-Stack Developer',
    company: 'Two Techies Pvt Ltd.',
    description: 'Developed and maintained multiple client projects using React, Express, MongoDB, and Firebase. Implemented RESTful APIs and real-time features.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Award,
    year: '2023',
    title: 'First Major Project Completion',
    company: 'Milestone Achievement',
    description: 'Successfully completed first major project. MERN stack development, RESTful APIs and real-time synchronization.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: GraduationCap,
    year: '2022',
    title: 'Started Development Journey',
    company: 'Self-Learning & Bootcamps',
    description: 'Began intensive learning in web development. Mastered HTML, CSS, JavaScript, React, and Node.js through online courses and personal projects.',
    color: 'from-blue-500 to-cyan-600',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and achievements throughout my development career
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-xl p-6 md:p-8"
                    >
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <span className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.year}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-cyan-400">
                        {exp.title}
                      </h3>

                      <p className="text-gray-400 font-medium mb-3">
                        {exp.company}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-xl p-8 inline-block">
            <p className="text-gray-300 text-lg mb-2">
              <span className="gradient-text font-bold text-2xl">2.5+</span> years of experience
            </p>
            <p className="text-gray-400">
              Building innovative solutions and growing every day
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
