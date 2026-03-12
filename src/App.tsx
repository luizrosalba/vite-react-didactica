import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className="app-container">
        <h1>Playing with styles</h1>
        <p>Count: {count}</p>
        <h2>Flex Column</h2>
        <div className="flex-container-column">
          <div onClick={handleClick} className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>

        <h2>Flex Row</h2>
        <div className="flex-container-row">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
        </div>

        <h2>Grid</h2>
        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
        </div>
      </div>
      <h2></h2>
    </>
  )
}

export default App
