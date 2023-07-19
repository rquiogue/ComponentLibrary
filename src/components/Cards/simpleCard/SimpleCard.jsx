import React from 'react'
import './SimpleCard.css'

const SimpleCard = ({width, height, backgroundColor, color, centered, children}) => {
    const myStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        
    }

  return (
    <div className='simple-card' style={myStyle}>{children}</div>
  )
}

export default SimpleCard