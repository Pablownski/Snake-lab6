import { BOARD_SIZE, CELL_SIZE } from '../utils/constants'
import Snake from './Snake'
import Food from './Food'

function Board({ snake, food, speed }) {
  const boardPx = BOARD_SIZE * CELL_SIZE

  return (
    <div
      className="board"
      style={{ width: boardPx, height: boardPx, position: 'relative' }}
    >
      <Food food={food} />

      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: boardPx,
          height: boardPx,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <Snake snake={snake} speed={speed} />
      </svg>
    </div>
  )
}

export default Board
