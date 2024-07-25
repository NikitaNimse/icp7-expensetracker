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
          type="text"
          placeholder="Fullname"
           className="input"
          value={user.fullName}
          onChange={(e) => setUser({ ...user, fullName: e.target.value})}
          />

        <input
          type="email"
          placeholder="Email"
           className="input"
          value={user.email}
          onChange={(e)=>setUser({...user, email: e.target.value})}
          />

        <input
          type="password"
          placeholder="Password"
           className="input"
          value={user.password}
          onChange={(e)=>setUser({...user, password: e.target.value})}
          />

        <input
          type="date"
          placeholder="Date of Birth"
          className="input"
          value={user.dob}
          onChange={(e)=>setUser({...user, dob: e.target.value})}
          />

        <button type="button" className="form-btn">Register Now </button>

        </form>
                 

      
        
        
        </div>
  )
}

export default SignUp