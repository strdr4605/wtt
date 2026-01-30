import { useState, useRef, useCallback } from 'react'

type UseTouchDragSelectOptions<T> = {
  items: T[]
  onSelect: (items: T[]) => void
  onToggle: (item: T) => void
}

export function useTouchDragSelect<T>({ items, onSelect, onToggle }: UseTouchDragSelectOptions<T>) {
  const [dragStart, setDragStart] = useState<T | null>(null)
  const [dragEnd, setDragEnd] = useState<T | null>(null)
  const itemRefs = useRef<Map<T, HTMLElement>>(new Map())

  const getItemsInRange = useCallback((): T[] => {
    if (dragStart === null || dragEnd === null) return []
    const startIdx = items.indexOf(dragStart)
    const endIdx = items.indexOf(dragEnd)
    const minIdx = Math.min(startIdx, endIdx)
    const maxIdx = Math.max(startIdx, endIdx)
    return items.slice(minIdx, maxIdx + 1)
  }, [dragStart, dragEnd, items])

  const getItemFromTouch = (touch: React.Touch): T | null => {
    for (const [item, el] of itemRefs.current.entries()) {
      const rect = el.getBoundingClientRect()
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        return item
      }
    }
    return null
  }

  const handleTouchStart = (item: T) => {
    setDragStart(item)
    setDragEnd(item)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart === null) return
    const touch = e.touches[0]
    const item = getItemFromTouch(touch)
    if (item !== null && item !== dragEnd) {
      setDragEnd(item)
    }
  }

  const handleTouchEnd = () => {
    if (dragStart !== null && dragEnd !== null) {
      const selected = getItemsInRange()
      if (selected.length === 1) {
        onToggle(selected[0])
      } else if (selected.length > 1) {
        onSelect(selected)
      }
    }
    setDragStart(null)
    setDragEnd(null)
  }

  const registerRef = (item: T, el: HTMLElement | null) => {
    if (el) itemRefs.current.set(item, el)
    else itemRefs.current.delete(item)
  }

  const draggedItems = new Set(getItemsInRange())

  return {
    draggedItems,
    registerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
