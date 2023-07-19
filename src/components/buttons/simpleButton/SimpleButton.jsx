import './SimpleButton.css'

import React from 'react'

const SimpleButton = ({width, height, backgroundColor, color, clickHandler, children}) => {
    const myStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
    }

  return (
    <button className="simple-button" 
        style={myStyle}
        onClick={clickHandler ? () => clickHandler() : () => console.log("No click handler provided")}>{children}</button>
  )
}

export default SimpleButton