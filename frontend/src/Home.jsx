import React from 'react'
import './Home.css'
function Home() {
    return (
        <div>
            <div className='main'>

                <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">qustiona s platform</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                       </button>
                     <div className='search'>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                                
                            </form>
                            <button >i<i class="bi bi-person-circle"></i></button>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Home
