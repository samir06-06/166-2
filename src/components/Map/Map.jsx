import React from 'react'
import map from "../../assets/Map.png"
import bg1 from "../../assets/Banner1.png"
import phone from "../../assets/Vector.png"
import Pic_card from '../Pic_card/Pic_card'
import "./Map.scss"
function Map() {
  return (
    <div id="map">
      <h1>Fəaliyyət göstərdiyimiz ölkələr</h1>
      <div className='map-div'>
            <img src={map} alt="" />
      </div>
      <Pic_card
      background={bg1}
      h1=" 03.08.25-ə qədər"
      h2="20%-Lorem ipsum dolor sit amet"
      h3=""
      h4={
        <>
          Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare <br />
          viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.
        </>
      }
      children={<>
        <img src={phone} alt="" /><h1>&nbsp;166</h1>
        </>}
        >
      </Pic_card>
    </div>
  )
}

export default Map
