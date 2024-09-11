import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"
import logo from "../../assets/166.png"
import phone from "../../assets/Vector.png"
import { useState } from 'react';
import Main_button from '../Main_button/Main_button';
function Header() {
  const [selected, setSelected] = useState('individual');

  return (
    <div id="header" >
      <div className='header-top container'>
        <div className='customers'>
        <button
        className={`button ${selected === 'individual' ? 'selected' : ''}`}
        onClick={() => setSelected('individual')}
      >
        Ferdi Musteriler
      </button>
      <button
        className={`button ${selected === 'corporative' ? 'selected' : ''}`}
        onClick={() => setSelected('corporative')}
      >Korporativ Musteriler</button>
        </div>
        <div className='header-top-right'>
            <button className='online-payment'><i class="fa-regular fa-credit-card"></i>Onlayn Odenis</button>
            <button>Eng <i class="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>
      <div className='header-bottom container'>
        <Link to="/"><img src={logo} alt="166" /></Link>
        <div className='search'> 
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search' />
        </div>
        <div className='header-bottom-buttons'>
            <Link to="/">Əsas səhifə</Link>
            <Link to="/about">Şirkətimiz<i class="fa-solid fa-chevron-down"></i></Link>
            <Link to="/services">Xidmətlər<i class="fa-solid fa-chevron-down"></i></Link>
            <Link to="/blog">Blog<i class="fa-solid fa-chevron-down"></i></Link>
            <Link to="/call">Əlaqə</Link>
            <Main_button>
              {
                <>
                <img src={phone}/>&nbsp;&nbsp; <h1>Book a Call</h1>
                </>
              }
            </Main_button>
        </div>
      </div>
    </div>
  )
}

export default Header
