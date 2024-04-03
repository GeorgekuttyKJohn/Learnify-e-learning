import React from 'react'
import { Link } from 'react-router-dom';
import './Elements.css'
import homevideo from  '../Assets/homevideo.mp4'
const Elements = () => {
  return (
    <div className='elements'>
  {/* <img src={element_banner1}  alt="" /> */}

  <video autoPlay loop muted className='element-video'>
        <source src={homevideo} type='video/mp4' />
      </video>


    <div className='element-text'>
    <h1>Welcome to Learnify</h1>
    <h4>Start your learning journey with us.</h4>
    <div className="element-btn">
        <div> <Link to="/courses">Explore our Courses</Link> </div>
    </div>
    </div>
    
    </div>
  
  )
}

export default Elements
