import React from 'react'
import './Allcourses.css'
import Reactjs from "../Assets/Reactjs.png"
import flutter  from "../Assets/flutter.png"
import android from "../Assets/android.png"
import ios from "../Assets/ios.jpg"
import python from "../Assets/python.png"
import uiux from "../Assets/uiux.png"
import php from "../Assets/php.jpg"
import javascript from "../Assets/javascript.png"
import Angular from "../Assets/Angular.png"

const Allcourses = () => {
  return (
    <div className='allcourses'>
      <h1> Courses</h1>
      <div className="allcourses-container">
      <div className='allcourses-card'>
        <div className="course-info">
          <img src={Reactjs} alt="img" className='img'/>
          <h2>React</h2>
        <p>Learn React</p>
        <p class="price">Rs: 1999/-</p>
        <p className="old-price">Rs: 2499/-</p>
        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={flutter} alt="img" className='img'/>
          <h2>Flutter</h2>
        <p>Learn Flutter</p>
        <p class="price">Rs: 1999/-</p>
        <p className="old-price">Rs: 2499/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={android} alt="img" className='img'/>
          <h2>Android</h2>
        <p>Learn Android</p>
        <p class="price">Rs: 1999/-</p>
        <p className="old-price">Rs: 2499/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={ios} alt="img" className='img'/>
          <h2>IOS</h2>
        <p>Learn IOS</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
          <img src={python} alt="img" className='img'/>
          <h2>Python</h2>
        <p>Learn Python</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={uiux} alt="img" className='img'/>
          <h2>UI/UX</h2>
        <p>Learn Ui/Ux</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={php} alt="img" className='img'/>
          <h2>PHP</h2>
        <p>Learn PHP</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={javascript} alt="img" className='img'/>
          <h2>Javascript</h2>
        <p>Learn Javascript</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

      <div className='allcourses-card'>
        <div className="course-info">
        <img src={Angular} alt="img" className='img'/>
          <h2>Angular.js</h2>
        <p>Learn Angular.js</p>
        <p class="price">Rs: 1499/-</p>
        <p className="old-price">Rs: 1999/-</p>

        <button class="view-course-btn">VIEW COURSE</button>
      </div>
      </div>

     
      
    
      </div>
    </div>
  )
}

export default Allcourses
