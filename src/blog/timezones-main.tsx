import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { ScheduleMeetingsAcrossTimeZones } from './ScheduleMeetingsAcrossTimeZones'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScheduleMeetingsAcrossTimeZones />
  </StrictMode>,
)
