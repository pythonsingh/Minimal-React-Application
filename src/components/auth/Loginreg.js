import React, { useState } from 'react'
import './Loginreg.css';
import {useNavigate} from 'react-router-dom'
import { Alert } from '@mui/material';

const Loginreg = () => {

  const [error,seterror] = useState({
    status : false,
    msg: "",
    type: ""
  }) 


  const navigate = useNavigate()
  const handleSubmit =(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email:data.get("email"),
          password:data.get("password")
        }
     

      if (actualData.email && actualData.password){
        document.getElementById("form").reset()
        seterror({status:true, msg: "login Successfull", type:"success"},2000)
        navigate('/')
      } else{
        seterror({status:true, msg: "All Field Required", type:"error"},2000)
      }
  }
  return (
    <>
    <div class="login-box">
  <h2>Login</h2>
  <form id="form" onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="email"/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password"/>
      <label>Password</label>
    </div>
    <button >
      <span></span>
      <span></span>
      Login
      </button>
  </form>
  <br/>
   <Alert severity={error.type}>{error.msg}</Alert>
</div>
    </>
  )
}

export default Loginreg