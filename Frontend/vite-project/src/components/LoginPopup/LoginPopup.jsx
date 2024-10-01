// import React from 'react'
// import './LoginPopup.css'
// import { useState } from 'react'
// import { assets } from '../../assets/assets'
// const LoginPopup = ({setShowlogin}) => {

//     const [currState, setcurrState] = useState("Login")
//   return (
//     <div className='login-popup'>
//       <form className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img  onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
//         </div>
//         <div className="login-popup-inputs">
//             {currState === "Login" ? <></>:<input type="text" placeholder='Enter Your name' required />}
//             <input type="email" placeholder='Enter Your email' required />
//             <input type="password" placeholder='Enter Your password' required />
//         </div>
//         <button>{currState=== "Sign up"?"Create Account":"Login"}</button>
//         <div className="login-popup-condition">
//         <input type='checkbox' required /> 
//         <p> By continuing this, I agree with the <span>Terms and Conditions.</span></p>
//         </div>
//         {
//             currState==="Login"?<p>Create a new account? <span onClick={() => setcurrState("Sign up")}>Click here</span> </p>:
//             <p>Already have an account? <span onClick={()=>setcurrState("Login ")}>Login here</span></p>
//         }
      
//       </form>

//     </div>
//   )
// }

// export default LoginPopup
import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'; // Assuming assets contains your cross_icon

const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {/* Show name input only when in Sign up state */}
          {currState === "Sign up" && (
            <input type="text" placeholder="Enter Your name" required />
          )}
          <input type="email" placeholder="Enter Your email" required />
          <input type="password" placeholder="Enter Your password" required />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing this, I agree with the <span>Terms and Conditions</span>.</p>
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        {/* Toggle between Login and Sign up */}
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
