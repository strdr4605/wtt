import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { ScheduleMeetingWithoutEmailBackAndForth } from './ScheduleMeetingWithoutEmailBackAndForth'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScheduleMeetingWithoutEmailBackAndForth />
  </StrictMode>,
)
