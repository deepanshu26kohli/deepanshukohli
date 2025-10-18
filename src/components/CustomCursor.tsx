import { motion } from 'framer-motion';
import useCustomCursor from '../hooks/useCustomCursor';

export default function CustomCursor() {
  const { position, isPointer } = useCustomCursor();

  return (
    <>
      <motion.div
        className="animated-cursor hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-8 h-8 border-2 border-cyan-400 rounded-full transition-all duration-150 ${
            isPointer ? 'scale-150 bg-cyan-400/20' : ''
          }`}
        />
      </motion.div>

      <motion.div
        className="animated-cursor hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
      </motion.div>
    </>
  );
}
