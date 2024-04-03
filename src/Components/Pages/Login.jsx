import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/CSS/Login.css';
import loginSignupImage from '../Assets/login-animation.gif';


import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()
  console.log(data);
  

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/Login`,{
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
        navigate("/")
      }


    } else {
      alert('Please enter required fields');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={loginSignupImage} alt="" className="loginsignupimg" />

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="password-input-container">
            <input
              className="input"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="password-toggle" onClick={handleShowPassword}>
              {showPassword }
            </span>
          </div>

          <button className="button" type="submit">
            Login
          </button>

          <p className="register-link">
            Don't have an account? <Link to={"/SignupForm"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;














































































































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Pages/CSS/Login.css'
// import loginSignupImage from '../Assets/login-animation.gif';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     if (email && password) {
//       alert('Successfully logged in');
//     } else {
//       alert('Please enter required fields');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login-container">
//         <img src={loginSignupImage} alt="" className="loginsignupimg" />

//         <form className="login-form" onSubmit={handleSubmit}>
//           <label className="label" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="input"
//             type="email"
//             id="email"
//             name="email"
//             value={data.email}
//             onChange={handleOnChange}
//           />

//           <label className="label" htmlFor="password">
//             Password
//           </label>
//           <div className="password-input-container">
//             <input
//               className="input"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               name="password"
//               value={data.password}
//               onChange={handleOnChange}
//             />
//             <span className="password-toggle" onClick={handleShowPassword}>
//             </span>
//           </div>

//           <button className="button" type="submit">
//             Login
//           </button>

//           <p className="register-link">
//             Don't have an account? <Link to="/SignupForm">Sign Up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





































