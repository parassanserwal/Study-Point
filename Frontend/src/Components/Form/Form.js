import React from 'react'
import { useState } from 'react';
import './form.css'
import axios from "axios";
const Form = () => {
  const[user,setuser]=useState({name:"",email:"",number:"",profession:"",password:"",cpassword:""});
  let name,value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setuser({...user,[name]:value});
  }
  const submit=()=>{
    const {name,email,number,profession,password,cpassword}=user
    if(name&&email&&number&&profession&&password&&cpassword&&(password===cpassword)){
      axios.post("http://localhost:8000/register",user)
      .then(res=>console.log(res))
    }
    else{
      alert("Invalid Input")
    }

  }
  return (
    <div className='form1'>
      <div className='main-body'>
        <div className='inside-main-body'>
        <div className='pic-logo'>
        </div>
        <div className='form-details'>
            {/* <form> */}
                <p className='Tag'>Registration Form</p>
                <p className='li'>First 100 will get 10% off</p>
                <div className='Name'>
                <i className="Name-ii fa-solid fa-user"></i>
                <input type='text' className='name' value={user.name} onChange={handleInputs} name="name" placeholder='Your Full Name'/>
                </div>
                <div className='Number'>
                <i className="Number-i fa-solid fa-phone"></i>
                <input type='number' className='number' value={user.number} onChange={handleInputs} name="number" placeholder='Your Mobile Number'/>
                </div>
                <div className='EMAIL'>
                <i className="Email-i fa-solid fa-envelope"></i>
                <input type='text' className='email' value={user.email} onChange={handleInputs} name="email" placeholder='Your e-mail'/>
                </div>
                <div className='PROFESSION'>
                <i className="Profession-i fa-solid fa-briefcase"></i>
                <input type='text' className='profession' value={user.profession} onChange={handleInputs} name="profession" placeholder='Your Profession'/>
                </div>
                <div className='PASSWORD'>
                <i className="Password-i fa-solid fa-lock"></i>
                <input type='password' className='password' value={user.password} onChange={handleInputs} name="password" placeholder='Password'/>
                </div>
                <div className='CPASSWORD'>
                <i className="CPassword-i fa-solid fa-lock"></i>
                <input type='password' className='cpassword' value={user.cpassword} onChange={handleInputs} name="cpassword" placeholder='Confirm Password'/>
                </div>
                <div className="genderdetails">
                <label>Gender</label>
                {/* <br></br> */}
                <div className='male-female'>
                 <label><input type="radio" name="language" value="english" />Male</label>
                 <label><input type="radio" name="language" value="french"/> Female</label>
                 </div>
                 <br></br>
                 <div className='Sub' onClick={()=>{submit()}}>Submit</div>
                 </div>
                 

            {/* </form> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Form 
