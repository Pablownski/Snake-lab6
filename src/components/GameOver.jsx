import { motion } from 'framer-motion'

function GameOver({ score, onRestart }) {
  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modal"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.h2
          className="modal-title game-over-title"
          animate={{ x: [-6, 6, -6, 6, 0] }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Game Over
        </motion.h2>
        <p className="modal-score">Score: <strong>{score}</strong></p>
        <button className="btn" onClick={onRestart}>
          Play Again
        </button>
      </motion.div>
    </motion.div>
  )
}

export default GameOver
