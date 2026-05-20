import { useEffect, useRef } from 'react'

function useGameLoop(callback, delay, active) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!active) return
    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay, active])
}

export default useGameLoop
