import React from 'react'
import "./Our_team.scss"
import line from "../../assets/Line 2.png"
import home from "../../assets/home.png"
import Second_navbar from '../../components/Second_navbar/Second_navbar'
import person1 from "../../assets/Frame 36.png"
import person2 from "../../assets/Frame 37-1.png"
import person3 from "../../assets/Frame 37.png"
function Our_team() {
  return (
    <div className='container'>
         <img src={home} alt="" className='home-png'/>
       <Second_navbar/>
      <h1 className='how-work'> <img src={line} alt="" />Komandamız</h1>
      <div className='team-grid-container'> 
        <div className='team-part'>
          <div className='team-img'>
          <img src={person1} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person2} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person3} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person1} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person2} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person3} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person1} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person2} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəri</p>
        </div>
        <div className='team-part'>
          <div className='team-img'>
          <img src={person3} alt="" />
          </div>
          <h3>Samida Qəniyeva</h3>
          <p>Korporativ satış şöbəsinin rəhbəriv</p>
        </div>
  </div>
  </div>
  )
}

export default Our_team
