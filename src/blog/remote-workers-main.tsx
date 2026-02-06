import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { RemoteWorkersShareAvailability } from './RemoteWorkersShareAvailability'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemoteWorkersShareAvailability />
  </StrictMode>,
)
