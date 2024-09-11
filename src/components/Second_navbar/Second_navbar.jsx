import React from 'react'
import "./Second_navbar.scss"
import { Link } from 'react-router-dom'
function Second_navbar() {
  return (
    <nav className='second-navbar'>
    <Link to="/about">Haqqımızda</Link>
    <Link to="/team">Komandamız</Link>
    <Link to="/media">Mediada biz</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/q-a">Tez-tez verilən suallar</Link>
    <Link to="/galery">Qalereya</Link>
</nav>
  )
}

export default Second_navbar
