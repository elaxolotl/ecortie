import { useState } from 'react'
import './App.css'

function Nav() {
  const nav = ["home", "about us", "products", "get involved"];
  return (
    <nav>
      <img className='logo-nav' src='./ecortie-logo.png'/>
      <ul id='navbar'>
        {nav.map((item) => (
          <li><a>{item}</a></li>
        ))}
      </ul>
      <button id='contact'>contact us</button>
    </nav>
  )
}

function App() {
  return (
    <>
      <Nav />
    </>
  )
}

export default App
