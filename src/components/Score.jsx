import { motion, AnimatePresence } from 'framer-motion'

function Score({ score, highScore }) {
  return (
    <div className="score-container">
      <div className="score-item">
        <span className="score-label">Score</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={score}
            className="score-value"
            initial={{ scale: 1.4, color: '#39ff14' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.2 }}
          >
            {score}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="score-item">
        <span className="score-label">Best</span>
        <span className="score-value score-best">{highScore}</span>
      </div>
    </div>
  )
}

export default Score
