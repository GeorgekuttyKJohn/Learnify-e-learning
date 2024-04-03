import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from "../Assets/Logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

  const [menu,setMenu] = useState("home")
  const shopContext = useContext(ShopContext); // Changed here
  const { getTotalCartItem } = shopContext; // Changed here
  return (
     <div className='sticky-navbar'>
       <div className='Navbar'>
    <div className='Nav-logo'>
        <img src={logo} alt="" className='logo' />
      <p>LEARNIFY</p>
    </div>
    <ul className='nav-menu'>
      <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:'none'}} to='/'>HOME </Link>  {menu==="home"?<hr/> :<></> }</li>
      <li  onClick={()=>{setMenu("courses")}}> <Link style={{textDecoration:'none'}} to='/courses'>COURSES  </Link> {menu==="courses"?<hr/> :<></> }</li>

      <li  onClick={()=>{setMenu("tutor")}}> <Link style={{textDecoration:'none'}}  to='/tutor'>TUTOR</Link>   {menu==="tutor"?<hr/> :<></> }</li>
      
    </ul>
    <div className='nav-login'>
     <Link to='/login'> <button>Login</button></Link>
     <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
      <div className='nav-cart-count'>{getTotalCartItem()}</div>
    </div>
</div>

     </div>
   
  )
}

export default Navbar

