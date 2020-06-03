import React, {useRef} from 'react'
import {useHoverDirection} from './react-use-hover-direction'

export const App = () => {
  const boxRef = useRef()
  const mouseDirection = useHoverDirection(boxRef)

  return (
    <div
      ref={boxRef}
      style={{
        width: '150px',
        height: '150px',
        background: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!mouseDirection.x && !mouseDirection.y
        ? 'Hover me'
        : `${mouseDirection.x} ${mouseDirection.y}`}
    </div>
  )
}
