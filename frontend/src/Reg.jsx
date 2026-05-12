import React from 'react'
import { Link } from 'react-router'
function Reg() {

    return (
        <div className='all-1'>
            <div className='main-3'>
                <div className='subject'>
                    <h3 style={{ textAlign: "center", padding: "10px",color:"aqua" }}><b>REGISTER NOW</b></h3>
                 
                    <div style={{ marginLeft: "40px" }}>
                        <b>Name</b><br />
                        <input type="text" placeholder='fullname' style={{ borderRadius: "10px", padding: "8px", width: "350px" }} /><br /><br />
                        <b></b>
                        <b>USERNAME/EMAIL</b><br />
                        <input type="text" placeholder='Username' style={{ borderRadius: "10px", padding: "8px", width: "350px" }} /><br /><br />
                        <b>Email</b><br />
                        <input type="text" placeholder='Email' style={{ borderRadius: "10px", padding: "8px", width: "350px" }} /><br /><br />
                        <b>PASSWORD</b><br />
                        <input type="text" placeholder='Password' style={{ borderRadius: "10px", padding: "8px", width: "350px" }} /><br/><br />
                        <b>Number</b><br />
                        <input type="text" placeholder='mobile number' style={{ borderRadius: "10px", padding: "8px", width: "350px" }} /><br /><br />
                        <div className='tn'><button className='btn btn-info'>Confirom</button></div>
                        <b>Register now <Link to="/login">login</Link></b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reg
