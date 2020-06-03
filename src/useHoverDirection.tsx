import {RefObject, useEffect, useRef, useState} from 'react'
import {IMouseDirection, IMousePosition} from './useHoverDirection.d'

/**
 * Custom hook to retrieve hover direction.
 *
 * ```js
 * const mouseDirection = useHoverDirection(ref)
 * ```
 *
 * @typedef {Object}   MouseDirection
 * @property {string}  x - Horizontal mouse movement.
 * @property {string}  y - Vertical mouse movement.
 *
 * @param   ref               Target element ref.
 * @returns {MouseDirection}  Mouse movement direction.
 */
export const useHoverDirection = (ref: RefObject<any>): IMouseDirection => {
  const prevMousePosition = useRef({x: 0, y: 0} as IMousePosition)
  const prevMouseDirection = useRef({
    x: undefined,
    y: undefined,
  } as IMouseDirection)
  const [mouseDirection, setMouseDirection] = useState({
    x: undefined,
    y: undefined,
  } as IMouseDirection)

  if (!ref)
    throw new Error('`useHoverDirection` must be passed an element `ref`.')

  const getMouseDirection = (e: MouseEvent) => {
    const {pageX, pageY} = e
    const currentMouseDirection = {
      x:
        prevMousePosition.current.x < pageX
          ? 'RIGHT'
          : prevMousePosition.current.x > pageX
          ? 'LEFT'
          : prevMouseDirection.current.x ?? undefined,
      y:
        prevMousePosition.current.y < pageY
          ? 'DOWN'
          : prevMousePosition.current.y > pageY
          ? 'UP'
          : prevMouseDirection.current.y ?? undefined,
    }

    if (
      prevMouseDirection.current.x !== currentMouseDirection.x ||
      prevMouseDirection.current.y !== currentMouseDirection.y
    ) {
      setMouseDirection(currentMouseDirection)
      prevMouseDirection.current = currentMouseDirection
    }

    prevMousePosition.current = {x: pageX, y: pageY}
  }

  const handleMouseMove = (event: MouseEvent) => getMouseDirection(event)

  useEffect(() => {
    ref.current.addEventListener('mousemove', handleMouseMove)

    return () => {
      ref.current.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref, handleMouseMove])

  return mouseDirection
}
