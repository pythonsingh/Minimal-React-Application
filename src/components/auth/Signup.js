import React, { useState } from 'react'
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate()
  const [error,seterror] = useState({
    status : false,
    msg: "",
    type: ""
  }) 

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name:data.get("name"),
      email:data.get("email"),
      password:data.get("password")

    }

    if (actualData.name && actualData.email && actualData.password){
      document.getElementById("form").reset()
      seterror({status:true, msg: "login Successfull", type:"success"},2000)
      navigate('/login')
    } else{
      seterror({status:true, msg: "All Field Required", type:"error"},2000)
    }
  }
  return (
    <>
    <div class="login-box">
  <h2>Signup</h2>
  <form id="form" onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="name" required/>
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="Email" name="email" required/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required/>
      <label>Password</label>
    </div>
    <button >
      <span></span>
      <span></span>
      Register
      </button>

      <Alert severity={error.type}>{error.msg}</Alert>
  </form>
</div>
    </>
  )
}

export default Signup