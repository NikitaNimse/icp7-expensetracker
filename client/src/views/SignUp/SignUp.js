import "./SignUp.css"
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

import React, { useState } from 'react'

function SignUp() {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: '',
        dob: ''
      })
      const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_bACKEND_URL}/signup`, {
          fullname: user.fullname,
          email: user.email,
          password: user.password,
          dob: user.dob
        })
    
        if(response.data.success){
          toast.success(response.data.message)
    
          setUser({
            fullName: '',
            email: '',
            password: '',
            dob: ''
          })
        }
        else{
          toast.error(response.data.message)
        }
      }
  

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

        <button type="button" onClick={signup} className="form-btn">Register Now </button>

        </form>
                 

      
        <Toaster />
        
        </div>
  )
}

export default SignUp