import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetworkVisualization from './components/NetworkVisualization'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NetworkVisualization />
    </>
  )
}

export default App
