import { motion } from 'framer-motion'
import { CELL_SIZE } from '../utils/constants'

function Food({ food }) {
  return (
    <motion.div
      key={`${food.x}-${food.y}-${food.emoji}`}
      style={{
        position: 'absolute',
        left: food.x * CELL_SIZE,
        top: food.y * CELL_SIZE,
        width: CELL_SIZE,
        height: CELL_SIZE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: CELL_SIZE * 0.82,
        lineHeight: 1,
        userSelect: 'none',
        zIndex: 2,
      }}
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: [1, 1.18, 1], rotate: 0 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
    >
      {food.emoji}
    </motion.div>
  )
}

export default Food
