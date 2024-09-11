import React from 'react';
import Main_button from '../Main_button/Main_button';
import "./Pic_card.scss"
function Pic_card({ background, h1, h2, h3, h4, children }) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 

  };

  return (<div className='we-on-media'>
  <h1 className='media-heading'>Mediada biz</h1>
    <div id="pic_card" style={backgroundStyle}>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <Main_button>{children}</Main_button>
    </div>

  </div>
  );
}

export default Pic_card;
