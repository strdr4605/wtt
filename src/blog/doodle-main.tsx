import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { DoodleAlternatives } from './DoodleAlternatives'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DoodleAlternatives />
  </StrictMode>,
)
