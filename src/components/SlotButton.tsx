import { forwardRef, useRef } from 'react'

type Props = {
  hourLabel: string
  selected: boolean
  isDragging?: boolean
  onToggle: () => void
  onTouchStart?: () => void
}

export const SlotButton = forwardRef<HTMLButtonElement, Props>(
  ({ hourLabel, selected, isDragging, onToggle, onTouchStart }, ref) => {
    const touchMoved = useRef(false)

    const handleTouchStart = () => {
      touchMoved.current = false
      onTouchStart?.()
    }

    const handleTouchMove = () => {
      touchMoved.current = true
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (!touchMoved.current) {
        e.preventDefault()
        onToggle()
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={onToggle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`
          px-3 py-2 rounded-lg text-sm font-medium transition-colors
          ${selected
            ? 'bg-blue-600 text-white'
            : isDragging
              ? 'bg-blue-300 dark:bg-blue-700 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }
        `}
      >
        {hourLabel}
      </button>
    )
  }
)
