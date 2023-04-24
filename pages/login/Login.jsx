import React, { useState } from 'react'
import "./login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const history=useNavigate();

const home=()=>{
  history("/")
};

const[inputs, setInputs]=useState({
  mobileNumber:"",
  password:"",
});

const[toggleEye,setToggleEye]=useState(false);
const[inputType,setInputType]=useState("password");
const handleToggle=(e)=>{
  setToggleEye(!toggleEye);
  setInputType(inputType==="password"?"text":"password")
};
const handleChange=(e)=>{
  setInputs((prev)=>({

  ...prev, [e.target.name]:e.target.value
  }))
};
console.log(inputs);

  return (
    <div className='login'>
<form>
        <h2>Login</h2>
       <div className='formInput'>
        <input type="mobileNumber" 
        name="mobileNumber" 
        id="mobile" 
        placeholder="Mobile Number"
        onChange={handleChange}
         required
         />
       </div>

       <div className='formInput'>
        <input type={inputType}
        name="password" 
        id="password" 
        placeholder="Password"
        onChange={handleChange} 
        required/>
        <div className='eyeIcon' onClick={handleToggle}>
          {toggleEye ? <Visibility/> : <VisibilityOff/>}
        </div>
       </div>
     
        <button type="submit" onClick={home}>Submit</button>
      <div className='formLink'>
       <span>Don't have an account?</span> 
      <Link to="/register" className='formSignup' style={{textDecoration:"none" , color:"white",fontStyle:"italic"}}>{" "}Sign Up</Link>
      <div className='line'></div>
      <div className='media-operations'></div>
      </div>
      </form>

      



        </div>
  )
}

export default Login