import React from 'react';
import './Service.scss';
import gerb_grey from '../../assets/gerb-grey.png';
import gerb_bright from '../../assets/gerb-bright.png';

function Service({ icon, name }) {
  // Determine the icon for the gerb based on the value of icon
  const gerb = name === 'Logistika' ? gerb_bright : gerb_grey;

  return (
    <div className='service'>
      <div className='service-icon'>
        <img src={icon} alt="Service Icon" />
      </div>
      <div className='service-info'>
        <h2>{name}</h2>
        <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>      
      </div>
      <img className="gerb" src={gerb} alt="Service Logo" />
    </div>
  );
}

export default Service;
