import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Calc from './File/Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Calc/>
    </App>
  </StrictMode>,
)
