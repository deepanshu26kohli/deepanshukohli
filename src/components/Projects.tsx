import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Chat Platform',
    description: 'Real-time chat application with AI integration using vector databases for semantic search and context-aware responses.',
    tech: ['React', 'Node.js', 'Vector DB', 'WebSockets'],
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.demo.com',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Full-featured admin dashboard with analytics, inventory management, and real-time order tracking.',
    tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
    image: 'https://images.pexels.com/photos/7172832/pexels-photo-7172832.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.demo.com',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Social Media Mobile App',
    description: 'Cross-platform mobile app with features like stories, real-time messaging, and content sharing.',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.demo.com',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with Kanban boards, team collaboration, and progress tracking.',
    tech: ['React', 'Supabase', 'Tailwind', 'DnD Kit'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project4',
    live: 'https://project4.demo.com',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing website with advanced search, virtual tours, and integrated booking system.',
    tech: ['React', 'Node.js', 'SQL', 'Google Maps API'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.demo.com',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile fitness application with workout plans, progress tracking, and nutrition recommendations.',
    tech: ['React Native', 'Express', 'MongoDB', 'ML Kit'],
    image: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/project6',
    live: 'https://project6.demo.com',
    gradient: 'from-green-500 to-emerald-600',
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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </motion.a>

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
