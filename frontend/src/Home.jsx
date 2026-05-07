import React from 'react'
import './Home.css'
function Home() {
    return (
        <div>
            <div className='heading'>
                <div className='main'>

                    <nav class="navbar navbar-expand-lg w-100 ">
                        <div class="container-fluid cls">
                            <div>
                                <button data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on bottom" style={{ borderRadius: '10px' }} ><i class="bi bi-person-circle"><br /></i><b>sign up</b></button>

                            </div>
                            <a class="navbar-brand" href="#" style={{ textAlign: "center" }}> <h3><b>Q & A platform</b></h3></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className='btn'>
                                <button style={{ borderRadius: '10px' }}><i class="bi bi-bell-fill"></i></button>
                            </div>
                        </div><br />
                    </nav>
                </div >

                <div style={{ width: "500px", margin: "auto", display: 'flex', flexDirection: "row", gap: "50px" }}>
                    <form class="d-flex" role="j">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div><button className='btn btn-danger qus'>Add qustions</button></div>
                </div>
            </div>
            <br />
            <div  className='box-2'>
                <div className='title' style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <b><i class="bi bi-browser-firefox"></i> vaishak.kml<i class="bi bi-patch-check-fill"></i></b><button style={{backgroundColor:"blue",borderRadius:"10px",padding:"5px"}}>follow </button>
                    <p>Can you join a human to another human with their extreme agreement on all matters?</p><br />
                   <div className='try'><div style={{ display: "flex",gap: "15px"}}><button  style={{borderRadius:"10px"}}><i class="bi bi-hand-thumbs-up-fill"></i></button><button  style={{borderRadius:"10px"}}><i class="bi bi-hand-thumbs-down-fill"></i></button></div>
                    <button className='btn btn-info btnc' style={{borderRadius:"10px"}}><i class="bi bi-arrow-right-short"></i>answer</button></div> 
                </div>
            </div>
        </div >
    )
}

export default Home
