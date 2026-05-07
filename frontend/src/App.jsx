import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Home.css'
import Home from './Home'
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min'
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrapBundleMin.Tooltip(tooltipTriggerEl))

  },[])
  return (
    <>
      <Home/>
    </>
  )
}

export default App
