import React from 'react'
import './Alltutors.css'
import tutor1 from "../Assets/tutor1.jpg"
import tutor2 from "../Assets/tutor2.jpg"
import tutor3 from "../Assets/tutor3.jpg"
import tutor4 from "../Assets/tutor4.jpeg"
import tutor5 from "../Assets/tutor5.jpg"
import tutor6 from  "../Assets/tutor6.jpg"


const Alltutors = () => {
  return (
    <div className="alltutor">
        <h1>Meet Our Tutors</h1>
        <div className="alltutor-container">
          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor1} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Georgekutty</h2>
             <p>"An expert developer and trainer proficient in React.js, JavaScript," </p>
            </div>
          </div> 

          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor2} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Harry</h2>
             <p>"An expert developer and trainer proficient in Flutter"</p>
            </div>
          </div>

          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor3} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Nancy</h2>
             <p>"An expert developer and trainer proficient in Python"</p>
            </div>
          </div>

          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor4} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Andrew</h2>
             <p>"An expert developer and trainer proficient in UI/UX Design"</p>
            </div>
          </div>


          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor5} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Steeve</h2>
             <p>"An expert developer and trainer proficient in IOS and Android"</p>
            </div>
          </div>


          <div className='alltutor-card'>
            <div className='alltutor-info'>
            <img src={tutor6} alt="" />
            </div>
            <div className="alltutor-content">
             <h2>Christina</h2>
             <p>"An expert developer and trainer proficient in PHP and Angular.js"</p>
            </div>
          </div>


            
        </div>
    
  </div>
  )
}

export default Alltutors
