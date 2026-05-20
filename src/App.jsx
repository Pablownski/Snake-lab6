import { useState, useEffect, useCallback, useRef } from 'react'
import Board from './components/Board'
import Score from './components/Score'
import GameOver from './components/GameOver'
import StartScreen from './components/StartScreen'
import useGameLoop from './hooks/useGameLoop'
import {
  generateFood,
  checkWallCollision,
  checkSelfCollision,
  isEatingFood,
  getInitialSnake,
} from './utils/gameHelpers'
import { INITIAL_SPEED, SPEED_INCREMENT, MIN_SPEED } from './utils/constants'
import './styles/game.css'

function getInitialState() {
  const snake = getInitialSnake()
  return {
    snake,
    direction: { x: 1, y: 0 },
    food: generateFood(snake),
    score: 0,
    speed: INITIAL_SPEED,
    gameOver: false,
    started: false,
  }
}

function App() {
  const [snake, setSnake] = useState(getInitialState().snake)
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const [food, setFood] = useState(() => generateFood(getInitialState().snake))
  const [score, setScore] = useState(0)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)
  const [highScore, setHighScore] = useState(0)

  // Use a ref for direction to avoid stale closure in the game loop
  const directionRef = useRef(direction)
  const pendingDirection = useRef(direction)

  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  const moveSnake = useCallback(() => {
    setDirection(pendingDirection.current)
    directionRef.current = pendingDirection.current

    setSnake(prevSnake => {
      const head = prevSnake[0]
      const dir = directionRef.current
      const newHead = { x: head.x + dir.x, y: head.y + dir.y }

      if (checkWallCollision(newHead) || checkSelfCollision(newHead, prevSnake)) {
        setGameOver(true)
        return prevSnake
      }

      const eating = isEatingFood(newHead, food)
      const newSnake = eating ? [newHead, ...prevSnake] : [newHead, ...prevSnake.slice(0, -1)]

      if (eating) {
        setFood(generateFood(newSnake))
        setScore(prev => {
          const next = prev + 1
          setHighScore(best => Math.max(best, next))
          setSpeed(s => Math.max(MIN_SPEED, s - SPEED_INCREMENT))
          return next
        })
      }

      return newSnake
    })
  }, [food])

  useGameLoop(moveSnake, speed, started && !gameOver)

  useEffect(() => {
    const handleKey = (e) => {
      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      }
      const next = map[e.key]
      if (!next) return
      e.preventDefault()

      const current = directionRef.current
      // Prevent reversing into itself
      if (next.x === -current.x && next.y === -current.y) return
      pendingDirection.current = next
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const restartGame = () => {
    const init = getInitialState()
    setSnake(init.snake)
    setDirection(init.direction)
    directionRef.current = init.direction
    pendingDirection.current = init.direction
    setFood(generateFood(init.snake))
    setScore(0)
    setSpeed(INITIAL_SPEED)
    setGameOver(false)
  }

  const startGame = () => {
    restartGame()
    setStarted(true)
  }

  const difficultyLabel = () => {
    if (speed >= 130) return 'Easy'
    if (speed >= 100) return 'Medium'
    if (speed >= 70) return 'Hard'
    return 'Insane'
  }

  return (
    <div className="game-wrapper">
      {!started && <StartScreen onStart={startGame} />}
      {started && gameOver && (
        <GameOver score={score} onRestart={restartGame} />
      )}

      <Score score={score} highScore={highScore} />

      <Board snake={snake} food={food} speed={speed} />

      {started && !gameOver && (
        <p className="difficulty">
          Difficulty: <span>{difficultyLabel()}</span>
        </p>
      )}
    </div>
  )
}

export default App
