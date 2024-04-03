import React, { useState } from 'react';
import '../Pages/CSS/SignupForm.css'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate= useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const handleOnChange = (e) => {
    const {name,value} = e.target;
    setData(prev => ({
      ...prev,
      [name]: value 
    }));
  };

  console.log(process.env.REACT_APP_SERVER_DOMIN);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {firstName,email,password,confirmPassword} = data;
    if(firstName && email && password && confirmPassword) {
      if(password === confirmPassword) {

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/SignupForm`,{
          method :"POST",
          headers :{
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })

        const dataRes = await fetchData.json()
        console.log(dataRes);
        alert(dataRes.message);
        if(dataRes.alert){
          navigate("/login");
        }
        
      } else {
        alert("Password and Confirm Password do not match");
      }
    } else {
      alert("Please enter all required fields");
    }
  };

  return (
    <div className='signup'> {/* Use the class from the external CSS */}
      <div className='signup-container'> {/* Use the class from the external CSS */}
        <h1 className='text-center text-2xl font-bold'>Signup</h1>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <label htmlFor='firstName' className='label'>First Name</label>
          <input type="text" id="firstName" name='firstName' className='input' value={data.firstName} onChange={handleOnChange} />
          <label htmlFor='lastName' className='label'>Last Name</label>
          <input type="text" id="lastName" name='lastName' className='input' value={data.lastName} onChange={handleOnChange} />
          <label htmlFor='email' className='label'>Email</label>
          <input type="email" id="email" name='email' className='input' value={data.email} onChange={handleOnChange} />
          <label htmlFor='password' className='label'>Password</label>
          <div className='input-container'>
            <input type={showPassword ? "text" : "password"} id="password" name='password' className='input' value={data.password} onChange={handleOnChange} />
            <span className='label' onClick={handleShowPassword}>{showPassword }</span>
          </div>
          <label htmlFor='confirmPassword' className='label'>Confirm Password</label>
          <div className='input-container'>
            <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name='confirmPassword' className='input' value={data.confirmPassword} onChange={handleOnChange} />
            <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword }</span>
          </div>
          <button className='button'>Signup</button>
        </form>
        <p className='login-link'>Already have an account? <Link to="/login" className='text-green-500 underline'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;



















































































// import React from 'react'
// import '../Pages/CSS/SignupForm.css'
// import loginSignupImage from "../Assets/login-animation.gif";
// import { Link, } from 'react-router-dom';
// // import Login from './Login';



// const SignupForm = () => {
    
//   return (
//     <div className="signup">
//         <div className="signup-container">
//         <img src={loginSignupImage} alt="" className='loginsignupimg' />

//         <form className="sign-up-form">
//       <label className="label" htmlFor="firstName">First Name</label>
//       <input className="input" type="text" id="firstName" name="firstName" required />

//       <label className="label" htmlFor="lastName">Last Name</label>
//       <input className="input" type="text" id="lastName" name="lastName" required />

//       <label className="label" htmlFor="email">Email</label>
//       <input className="input" type="email" id="email" name="email" required />

//       <label className="label" htmlFor="password">Password</label>
//       <input className="input" type="password" id="password" name="password" required />

//       <label className="label" htmlFor="confirmPassword">Confirm Password</label>
//       <input className="input" type="password" id="confirmPassword" name="confirmPassword" required />

//  <button className="button" type="submit">Sign Up</button>

//       <p className="login-link">Already have account? <Link to="./Login">Login</Link> </p>
//     </form>
//         </div>
//     </div>
   
//   )
// }

// export default SignupForm
