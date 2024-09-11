import React from 'react'
import "./Number_cards.scss"
import Number_card from '../Number_card/Number_card'
function Number_Cards() {
  return (
    <div>
        <div className='numbers-lorem'>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World</p>
        </div>
        <div className='numbers-cards'>
          <Number_card lorem="Lorem Ipsum" inf="25" />
          <Number_card lorem="Lorem Ipsum" inf="105k" />
          <Number_card lorem="Lorem Ipsum" inf="20" />
        </div>
    </div>
  )
}

export default Number_Cards
