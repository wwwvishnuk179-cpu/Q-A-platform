import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Home.css'
import Home from './Home'
import './Login.css'
import Reg from './Reg'
import './Reg.css'
import Notification from './Notification'
import './Notification.css'
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min'
import Login from './Login'
import { BrowserRouter, Route, Routes } from "react-router"
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrapBundleMin.Tooltip(tooltipTriggerEl))

  }, [])
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path='reg' element={<Reg/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
