import { useState } from 'react'
import './App.css'
import Calc from './File/Calc'

function App({children}) {
  const [count, setCount] = useState(0)
  return (
   <>
      <div>
      {children}
      </div>
   </>
  )
}

export default App
