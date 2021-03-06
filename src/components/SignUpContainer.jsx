import React from 'react'
import { useState, useEffect } from 'react'
import postCall from '../Services/postCall';

const SignUpContainer = () => {

    // function _(id){
    //     return document.getElementById(id);
    // }

    // function main()
    // {
    //     _("signup-form").addEventListener("submit",UserSignUp);

    // }

    const [values, setValues] = useState({firstName: "", lastName: "",
    Email:"",dob:"",phone:"",State:"",City:"",Password:"", ConfirmPassword:""})
    
    const {firstName,lastName,Email,dob,phone,State,City,Password,ConfirmPassword} = values;

    const onChange = (key,value)=>{
        setValues(prev =>({
            ...prev,
            [key]:value
        }))
    }

    const formSubmit = (e)=>{
        e.preventDefault();
    postCall("/users",values)
     .then((res)=>{
         console.log(res);
         setValues({firstName: "", lastName: "",
         Email:"",dob:"",phone:"",State:"",City:"",Password:"", ConfirmPassword:""});
         alert("Registered Successfully")
     });
    }

  return (

    <div className= "signUpContainer">
        <form className='formSection' onSubmit={formSubmit}>
    <div className="signUpSection">
    <p id='two'>Sign Up</p>
    <div className="signUpInput"> 

    <input type="text" placeholder='First Name' id='firstName' 
    value={firstName}
    onChange={(e) => onChange("firstName",e.target.value)} />


    <input type="text" placeholder='Last Name' id='lastName'
    value={lastName} 
    onChange={(e) => onChange("lastName",e.target.value)}/>
    </div>

    <div className="formField">
      <p>E-mail</p>
    <input type="text" 
    value={Email} 
    onChange={(e) => onChange("Email",e.target.value)} />
    </div>

    <div className="formField">
      <p>Create-Password</p>
    <input type="password"
     value={Password} 
     onChange={(e) => onChange("Password",e.target.value)}
      /> 
    </div>

    <div className="formField">
      <p>Confirm-Password</p>
    <input type="password" 
      value={ConfirmPassword} 
      onChange={(e) => onChange("ConfirmPassword",e.target.value)} 
     />
    </div>

    <div className="formField">
      <p>Date of Birth</p>
    <input type="date"
     value={dob} 
     onChange={(e) => onChange("dob",e.target.value)} /> 
    </div>

    <div className="formField">
      <p>Phone Number</p>
    <input type="text"
     value={phone} 
     onChange={(e) => onChange("phone",e.target.value)} /> 
    </div>

    <div className="formField">
      <p>State</p>
    <input type="text" 
     value={State} 
     onChange={(e) => onChange("State",e.target.value)} />
    </div>

    <div className="formField">
      <p>City</p>
    <input type="text"
     value={City} 
     onChange={(e) => onChange("City",e.target.value)} /> 
    </div>

    <button id='signUpButton'>Sign-up</button>
    </div>
    </form>
  </div>
  )


}

export default SignUpContainer