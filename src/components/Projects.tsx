import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Image Chatbot',
    description: 'Image chat application with AI integration using vector databases for semantic search and context-aware responses.',
    tech: ['React', 'Node.js', 'Vector DB', 'Supabase'],
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project1',
    live: 'https://ai-powered-image-chatbot-web1.vercel.app/',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Meerani E-Commerce Clothing Store', 
    description: 'E-commerce website with user authentication, cart functionality, and payment integration.',
    tech: ['Odoo'],
    image: 'https://images.pexels.com/photos/7172832/pexels-photo-7172832.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project2',
    live: 'https://meerani.odoo.com',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'AKS Fitness - Gym website',
    description: 'Fitness website with responsive design, interactive elements and user experience.',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project3',
    live: 'https://aksfitness.vercel.app',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {/* <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </motion.a> */}

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
