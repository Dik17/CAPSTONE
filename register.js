import React, { useState } from 'react'
const Register =()=>{
    const [userRegisteration, setuserRegistration]= useState({
        username: "",
        email:"",
        phone: "",
        password:""

    });
    const [records,setRecords]=useState([]);
    const handleInput=(e)=>{
          const name =e.target.name;
          const value=e.target.value;
          console.log(name,value);
           setuserRegistration({...userRegisteration,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newRecords ={...userRegisteration, id :new Date().getTime().toString()}
        console.log(records);
        setRecords([...records,newRecords]);
        console.log(records);
        setuserRegistration({username:"",email:"",phone:"",password:""});
    }     
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label html for="username"> Username</label>
                <input type="text" autoComplete="off" 
                value={userRegisteration.username}
                onChange={handleInput}
                name="username" id="username"/>
            </div>
            <div>
                <label html for="email"> Email</label>
                <input type="text" autoComplete="off"
                value={userRegisteration.email}
                onChange={handleInput}
                name="email" id="email"/>
                
            </div>
            <div>
                <label html for="phone"> Phone</label>
                <input type="text" autoComplete="off"
                value={userRegisteration.phone}
                onChange={handleInput}
                name="phone" id="phone"/>
                
            </div>
            <div>
                <label html for="password"> Password</label>
                <input type="text" autoComplete="off"
                value={userRegisteration.password}
                onChange={handleInput}
                name="password" id="password"/>
                
            </div>
            <button type="submit">Register</button>
        </form>
    {/* <div>
            {
                records.map((curElem)=>{
                    return(
                        <div className="showDataStyle">
                            <p>{curElem.username}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.phone}</p>
                            <p>{curElem.password}</p>


                        </div>
                    )
                }) */}
            
        
        </>
    )
}
export default Register