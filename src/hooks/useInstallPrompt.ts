import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'wtt-install-prompt'
const COPY_THRESHOLD = 5

type PromptState = {
  copyCount: number
  dismissed: boolean
}

function loadState(): PromptState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : { copyCount: 0, dismissed: false }
  } catch {
    return { copyCount: 0, dismissed: false }
  }
}

function saveState(state: PromptState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

function isStandalone(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
}

export function useInstallPrompt() {
  const [state, setState] = useState<PromptState>(loadState)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    saveState(state)
  }, [state])

  const trackCopy = useCallback(() => {
    if (state.dismissed || isStandalone()) return

    const newCount = state.copyCount + 1
    setState(prev => ({ ...prev, copyCount: newCount }))

    if (newCount === COPY_THRESHOLD) {
      setShowPrompt(true)
    }
  }, [state.copyCount, state.dismissed])

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false)
    setState(prev => ({ ...prev, dismissed: true }))
  }, [])

  return {
    showPrompt,
    trackCopy,
    dismissPrompt,
  }
}
