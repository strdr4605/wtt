import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { LettuceMeetVsWhen2MeetVsWtt } from './LettuceMeetVsWhen2MeetVsWtt'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LettuceMeetVsWhen2MeetVsWtt />
  </StrictMode>,
)
