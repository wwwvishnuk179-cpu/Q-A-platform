import React from 'react'
import { Link } from 'react-router'
function Login() {
    return (
    <div className='all'>
      <div className='main-2'>
        <div className='subject'>
          <h3 style={{ textAlign: "center",padding:"10px"}}><b>USER LOGIN</b></h3>
          <div style={{marginLeft:"40px"}}> <b>USERNAME/EMAIL</b><br />
            <input type="text" placeholder='Username' style={{ borderRadius: "10px", padding: "8px",width:"300px" }} /><br/><br />
            <b>PASSWORD</b><br />
            <input type="text" placeholder='Password' style={{ borderRadius: "10px", padding: "8px",width:"300px" }} />
          </div><br />
          <div><button className='btn btn-danger Login'>Login</button><br />
          <b>login now<Link to="/Reg">reg now</Link></b>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Login
