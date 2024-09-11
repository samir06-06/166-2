import React from 'react'
import "./Yellow_cards.scss"
import arrow_up_right from "../../assets/send.png" 
function Yellow_cards() {
  return (
        <div className='yellow-main'>
            <div className='main-one yellow-card'>
                <h2>Xidmetlerimiz</h2>
                <button><img src={arrow_up_right} alt=""/></button>
            </div>
            <div className='yellow-sub'>
                <div className='sub-main yellow-card'>
                    <h2>Partnyorlar</h2>
                    <button><img src={arrow_up_right} alt=""/></button>
                </div>
                <div className='sub-sub'>
                    <div className='yellow-card'>
                        <h2>Haqqimizda</h2>
                        <button><img src={arrow_up_right} alt=""/></button>
                    </div>
                    <div className='yellow-card'>
                        <h2>Müştəri Rəyləri</h2>
                        <button><img src={arrow_up_right} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Yellow_cards