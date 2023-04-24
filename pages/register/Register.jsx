import React,{useState} from 'react';
import "./register.scss";
import {Link} from "react-router-dom";
import FormInput from '../../components/formInput/FormInput';
const Register = () => {
  const[inputValues,setInputValues] = useState({
    username:"",
    mobileNumber:"",
    password:"",
    confirmPassword:"",
    
  });
  const inputs=[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
  },
  {
    id:2,
    name:"mobileNumber",
    type:"text",
    placeholder:"Mobile Number",
    errorMessage:"It should be a 10 digit number",
    pattern:"^[0-9]{10}$",
    required:true,
  },
  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8 -20 characters and include atleast 1 letter, 1 number, 1 special character",
    pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9][A-Za-z0-9!@#$%^&*()_+]{8,20}$",
    required:true,
  },
  {
    id:4,
    name:"confirmpassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Password don't match",
    pattern:inputValues.password,
    required:true,
  },
]
const handleChange=(e)=>
{
  setInputValues({...inputValues,[e.target.name]:e.target.value});
}
console.log(inputValues);
  return (
    <div className='register'>
   
      <form>
        <h2>Register</h2>
        {
          inputs.map((input)=>(
            <FormInput key={input.id}{...input}
            value={inputValues[input.name]}
            onChange={handleChange}
            />
          ))}
     
        <button type="submit" >Submit</button>
      <div className='formLink'>
       <span>Already have an account?</span> 
      <Link to="/login" className='formSignup' style={{textDecoration:"none" , color:"white",fontStyle:"italic"}}>{" "}Sign In</Link>
      <div className='line'></div>
      <div className='media-operations'></div>
      </div>
      </form>
        </div>
  )
}

export default Register