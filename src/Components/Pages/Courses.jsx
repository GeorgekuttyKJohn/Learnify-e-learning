import React from 'react'
// import Allcourses from '../Allcourses/Allcourses'
import Allcourses from "../Assets/Allcourses"
import Item from "../Item/Item";
import './CSS/Courses.css'

const Courses = () => {
  return (
    <div className='courses'>
      {/* <Allcourses/> */}
      <h1> Courses</h1>
      <div className='courses-container'>
      {Allcourses.map((item, idx) => {
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
        })}
      </div>

    </div>
  )
}

export default Courses
