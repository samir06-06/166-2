import React from 'react'
import "./Country_card.scss"
function Country_card(props) {
  return (
    <button id='country_card'>
        <img src={props.country_img} alt="" />
        <h5>{props.country_name}</h5>
    </button>
  ) 
}

export default Country_card
