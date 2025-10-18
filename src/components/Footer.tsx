import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400">
              Open to new opportunities and collaborations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by Deepanshu Kohli</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm mt-4"
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
