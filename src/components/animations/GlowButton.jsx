import { motion } from 'framer-motion'

function GlowButton({ onClick, children }) {
  return (
    <motion.button
      className="btn glow-btn"
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      {children}
    </motion.button>
  )
}

export default GlowButton
