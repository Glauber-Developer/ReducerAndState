import { useState } from 'react'
import './App.css'

export function AppState() {
  const [count, setCount] = useState(0)
  function handleClickIncremento() {
    setCount(count + 1)
  }
  function handleClickDecremento() {
    setCount(count - 1)
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClickIncremento}> + </button>
        <p>count is {count}</p>
        <button onClick={handleClickDecremento}>-</button>
      </div>
    </>
  )
}