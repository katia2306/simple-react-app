import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0)
  }

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button className="button increment" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <p className="alert-message">{count >= 10 ? "Count is too high!" : ""}</p>
    </div>
  )
}

export default Counter
