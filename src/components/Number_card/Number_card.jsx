import React from 'react'
import "./Number_card.scss" 

function Number_card(props) {
  return (
  <div id="number-card">
      <h1>{props.inf} <span>+</span></h1>
      <h5>{props.lorem} </h5>

  </div>
  )
}

export default Number_card
