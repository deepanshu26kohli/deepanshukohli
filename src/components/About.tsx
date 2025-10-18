import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: '2.5+ Years',
    description: 'Professional Experience',
  },
  {
    icon: Globe,
    title: 'Full-Stack',
    description: 'Web Development',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Mobile Apps',
  },
  {
    icon: Database,
    title: 'AI-Powered',
    description: 'Modern Solutions',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                Full-Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 2.5 years of hands-on experience, I specialize in building
                scalable, high-performance web and mobile applications. My expertise
                spans across the entire development stack, from crafting intuitive
                user interfaces to architecting robust backend systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm passionate about leveraging modern technologies like React.js,
                Node.js, and cloud platforms to create innovative solutions. My recent
                focus has been on AI-powered applications using vector databases and
                MCP servers, pushing the boundaries of what's possible in web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive in fast-paced environments and love turning complex problems
                into elegant, user-friendly solutions. Whether it's building RESTful APIs,
                implementing real-time features, or optimizing application performance,
                I bring dedication and technical excellence to every project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="glass-hover rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-cyan-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
