import { motion } from 'framer-motion'
import { CELL_SIZE } from '../utils/constants'

function Snake({ snake, speed }) {
  if (snake.length === 0) return null

  const center = (seg) => ({
    cx: seg.x * CELL_SIZE + CELL_SIZE / 2,
    cy: seg.y * CELL_SIZE + CELL_SIZE / 2,
  })

  const head = center(snake[0])
  const dir = snake.length > 1
    ? { x: snake[0].x - snake[1].x, y: snake[0].y - snake[1].y }
    : { x: 1, y: 0 }

  const fwd   = CELL_SIZE * 0.15
  const perp  = CELL_SIZE * 0.22
  const eye1  = { cx: head.cx + dir.x * fwd + (-dir.y) * perp, cy: head.cy + dir.y * fwd + dir.x * perp }
  const eye2  = { cx: head.cx + dir.x * fwd - (-dir.y) * perp, cy: head.cy + dir.y * fwd - dir.x * perp }

  // Transition duration slightly shorter than the game tick so segments arrive just before the next move
  const duration = (speed * 0.88) / 1000

  return (
    <g>
      {/* Render tail-to-head so the head circle is painted on top */}
      {[...snake].reverse().map((seg, revIdx) => {
        const idx = snake.length - 1 - revIdx
        const { cx, cy } = center(seg)
        const isHead   = idx === 0
        const radius   = isHead ? CELL_SIZE / 2 - 1 : CELL_SIZE / 2 - 3
        const fillColor = isHead ? '#5fff30' : '#39ff14'
        const opacity  = isHead ? 1 : Math.max(0.35, 1 - idx * (0.55 / snake.length))

        return (
          <motion.circle
            key={idx}
            r={radius}
            fill={fillColor}
            stroke="#1a4a00"
            strokeWidth={isHead ? 2 : 1}
            opacity={opacity}
            animate={{ cx, cy }}
            transition={{ duration, ease: 'linear' }}
          />
        )
      })}

      {/* Eyes — animated to stay on the head */}
      <motion.circle
        r={CELL_SIZE * 0.1}
        fill="#000"
        animate={{ cx: eye1.cx, cy: eye1.cy }}
        transition={{ duration, ease: 'linear' }}
      />
      <motion.circle
        r={CELL_SIZE * 0.1}
        fill="#000"
        animate={{ cx: eye2.cx, cy: eye2.cy }}
        transition={{ duration, ease: 'linear' }}
      />
      <motion.circle
        r={CELL_SIZE * 0.04}
        fill="#fff"
        animate={{ cx: eye1.cx + 1, cy: eye1.cy - 1 }}
        transition={{ duration, ease: 'linear' }}
      />
      <motion.circle
        r={CELL_SIZE * 0.04}
        fill="#fff"
        animate={{ cx: eye2.cx + 1, cy: eye2.cy - 1 }}
        transition={{ duration, ease: 'linear' }}
      />
    </g>
  )
}

export default Snake
