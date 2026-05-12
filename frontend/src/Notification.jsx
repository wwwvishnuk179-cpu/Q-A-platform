import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'

function Notification({className}) {
  return (
    <div>
       <div className={'main-4 '+className}>
            <div className='note' style={{padding:"5px"}}><h6 style={{font:"small-caption"}}>QA platform</h6><h5>User answerd your qustion</h5>
            <button className='btn btn-info'>check</button>
            </div>
            <div className='sec'  style={{padding:"5px"}}><h6 style={{font:"small-caption"}}>QA platform</h6><h5>user answered the qustion</h5>
            <button className='btn btn-info'>check</button>
            </div>
       </div>
    </div>
  )
}

export default Notification
