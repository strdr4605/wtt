import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BestFreeSchedulingTools } from './BestFreeSchedulingTools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BestFreeSchedulingTools />
  </StrictMode>,
)
