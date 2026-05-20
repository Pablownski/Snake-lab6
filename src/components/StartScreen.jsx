import { motion } from 'framer-motion'
import AnimatedTitle from './animations/AnimatedTitle'
import GlowButton from './animations/GlowButton'

function StartScreen({ onStart }) {
  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal">
        <AnimatedTitle />
        <motion.p
          className="modal-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Use arrow keys to move. Eat food to grow. Avoid walls and yourself!
        </motion.p>
        <GlowButton onClick={onStart}>Start Game</GlowButton>
      </div>
    </motion.div>
  )
}

export default StartScreen
