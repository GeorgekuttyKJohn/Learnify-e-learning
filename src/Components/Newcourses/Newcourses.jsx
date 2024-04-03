import React from 'react'
import './Newcourses.css'
import NewCourses from '../Assets/NewCourses'
import Item from "../Item/Item";

// import python from "../Assets/python.png"
// import uiux from "../Assets/uiux.png"
// import php from "../Assets/php.jpg"
// import javascript from "../Assets/javascript.png"

const Newcourses = () => {
  return (
    <div className='newcourses'>
      <h1>New on Learnify</h1>

      <div className="newcourses-container">
      {NewCourses.map((item, idx) => {
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

export default Newcourses
