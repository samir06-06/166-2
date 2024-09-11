import React from 'react'
import "./Review.scss"
import profile from "../../assets/profile.png"
function Review() {
  return (
    <div id="review">
      <div className='img_num'>
        <img src={profile} alt="" />
        <h3>01</h3>
      </div>
    <div className='rest'>
      <div className='stars'>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
      <h4>Lisa Smith</h4>
    </div>
    </div>
  )
}

export default Review
