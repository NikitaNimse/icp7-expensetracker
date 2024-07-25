import "./SignUp.css"

import React, { useState } from 'react'

function SignUp() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: ''
      })
  

  return (
    <div>
        <h1 className="heading">User Registration</h1>
        <form className='signup-form'>
          <input 
          className='input' 
          type= "text" 
          placeholder='full name'
          value={fullname}
          onChange={(e)=>{
            setUser({...user,fullname: e.target.value})
          }}
          />

           <input 
          className='input'
          type= "email" 
          placeholder='Enter  email'
          value={email}
          onChange={(e)=>{
            setUser({...user,email: e.target.value})
          }}
          />

         <input  
          className='input'
          type= "password" 
          placeholder='Enter password'
          value={password}
          onChange={(e)=>{
            setUser({...user,password: e.target.value})
          }}
          />
          

          <input 
          className='input' 
          type= "date" 
          placeholder='Enter date of birth'
          value={dob}
          onChange={(e)=>{
            setUser({...user,dob: e.target.value})
          }}
          />

        <button type="button" className="form-btn">Register Now </button>

        </form>
                 

      
        
        
        </div>
  )
}

export default SignUp