import './App.css'
import './mediaQueries.css'
import Home from './Home';
import AboutUs from './AboutUs'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Nav() {
  const nav = ["About us", "Products", "Get involved"];
  return (
    <nav>
      <img className='logo-nav' src='./ecortie-logo.png' />
      <ul id='navbar'>
        {nav.map((item) => (
          <li><Link to={item}><a>{item}</a></Link></li>
        ))}
      </ul>
      <button id='contact-button' className='green-button'>contact us</button>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="About us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
