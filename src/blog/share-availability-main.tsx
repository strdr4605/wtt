import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { ShareAvailabilityWithoutCalendarLinks } from './ShareAvailabilityWithoutCalendarLinks'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShareAvailabilityWithoutCalendarLinks />
  </StrictMode>,
)
