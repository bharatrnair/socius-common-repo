import React from 'react'
import logo from './../components/Assets/logo.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginContainer = () => {
  const navigate = useNavigate();

const [values, setValues] = useState({Email: "", password: ""})

const {Email,password} = values;

  const onChange = (key,value)=>{
    setValues(prev =>({
        ...prev,
        [key]:value
    }))
}

const formSubmit = (e)=>{
  e.preventDefault();
fetch("https://localhost:44371/api/login",{
  method:"POST",
  headers:{
      "Content-Type":"application/json"
    },
  body:JSON.stringify({...values})
}).then(res => res.json())
.then((res)=>{
   console.log(res)
});
}


  return (
    <div className="loginContainer">
      <form className='formSection' onSubmit={formSubmit}>
        <div className="loginSection">
        <div className="logoSection">
          <img src={logo} alt="" />
          <div className="line"></div>
           <h1>socius</h1>
        </div>

        <input type="text" placeholder='username' id='username'
        value={Email}
        onChange={(e) => onChange("Email",e.target.value)}
         />

        <input type="text" placeholder='password'  id='password' 
         value={password} 
         onChange={(e) => onChange("password",e.target.value)}
         />
      
      <div className="loginButton">
        <button 
        onClick={()=> {
         navigate("/home") 
        }
        } id='login' >Log in</button>
      </div>

        <p id='one'>"connect people around"</p>
        </div>
        </form>
        </div>
  )
}

export default LoginContainer