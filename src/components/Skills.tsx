import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'React Native', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Ant Design', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Supabase', level: 85 },
      { name: 'Firebase', level: 85 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'Vector DBs', level: 75 },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'MVC Pattern', level: 90 },
      { name: 'AI Integration', level: 80 },
      { name: 'MCP Servers', level: 75 },
      { name: 'Git', level: 90 },
    ],
  },
];

const techStack = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-green-400 to-emerald-600' },
  { name: 'MongoDB', color: 'from-green-500 to-teal-600' },
  { name: 'Express', color: 'from-gray-400 to-slate-600' },
  { name: 'Supabase', color: 'from-emerald-400 to-green-600' },
  { name: 'Firebase', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tailwind', color: 'from-cyan-300 to-blue-400' },
  { name: 'React Native', color: 'from-blue-400 to-cyan-500' },
  { name: 'SQL', color: 'from-orange-400 to-red-500' },
  { name: 'AI/ML', color: 'from-pink-400 to-rose-600' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`glass-hover rounded-full px-6 py-3 bg-gradient-to-r ${tech.color} bg-clip-text`}
            >
              <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-cyan-400">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
