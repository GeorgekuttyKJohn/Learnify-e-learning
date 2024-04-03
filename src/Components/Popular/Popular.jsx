import React from 'react'
import { Link } from 'react-router-dom';
import './Popular.css'
import MostPopular from "../Assets/MostPopular"
import Item from "../Item/Item";

// import Reactjs from "../Assets/Reactjs.png"
// import flutter  from "../Assets/flutter.png"
// import android from "../Assets/android.png"
// import ios from "../Assets/ios.jpg"


const Popular = () => {
  return (
    <div className='popular' >
      <h1>Most Popular Courses</h1>
      <div className="popular-container" >
      {MostPopular.map((item, idx) => {
          console.log({ item });
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );

        })};


<div className="more-btn">
        <div><Link to="/Courses">More</Link></div>
    </div>
      
    
      </div>
    </div>
  )
}

export default Popular
