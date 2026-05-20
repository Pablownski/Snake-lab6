import { motion } from 'framer-motion'

function AnimatedTitle() {
  return (
    <motion.h1
      className="game-title"
      initial={{ opacity: 0, y: -30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      Snake
    </motion.h1>
  )
}

export default AnimatedTitle
