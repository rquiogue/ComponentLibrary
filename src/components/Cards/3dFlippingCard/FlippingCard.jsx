import React from 'react'

import './FlippingCard.css'

const FlippingCard = ({width, height, backgroundColor, color, front, back}) => {
    const myStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        
    }

  return (
    <div className='flipping-card' style={myStyle}><div className='side'>{front}</div><div>{back}</div></div>
  )
}

export default FlippingCard