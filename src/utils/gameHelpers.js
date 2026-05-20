import { BOARD_SIZE } from './constants'

const FOOD_EMOJIS = ['🍎', '🍇', '🍓', '🍉', '🍌', '🍒', '🥝', '🍍']

export function generateFood(snake = []) {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    }
  } while (snake.some(s => s.x === pos.x && s.y === pos.y))
  return { ...pos, emoji: FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)] }
}

export function checkWallCollision(head) {
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= BOARD_SIZE ||
    head.y >= BOARD_SIZE
  )
}

export function checkSelfCollision(head, snake) {
  return snake.some(segment => segment.x === head.x && segment.y === head.y)
}

export function isEatingFood(head, food) {
  return head.x === food.x && head.y === food.y
}

export function getInitialSnake() {
  return [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]
}
