import React from 'react'
import "./Media_cards.scss"
import media_img from "../../assets/media-img.jpg"
function Media_cards(props) {
  return (
    <div id="media-card">
      <div className='media-pic'>
        <img src={media_img} alt="" />
      </div>
      <div className='media-text'>
        <h5>{props.h5}</h5>
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </div>
    </div>
  )
}

export default Media_cards
