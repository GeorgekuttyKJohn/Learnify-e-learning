import React from 'react'
import { Link } from 'react-router-dom';

import './Maintutors.css'
import maintutor from "../Assets/maintutor.png"

const Maintutors = () => {
  return (
    <div className='Maintutors'>
    <div className="Maintutor-left">
       <h2>Meet Our Tutors</h2>
       <p>Dedicated Educators, Exceptional Results</p>
       <button className='Maintutor-btn'><Link to="/Tutor" onClick={window.scrollTo(0,0)}>View Tutors</Link></button>
        </div>

        <div className="Maintutor-right">
            <img src={maintutor} alt="" />
            </div>  
            
           
    </div>
    
  )
}

export default Maintutors
