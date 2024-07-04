import './App.css'
import './mediaQueries.css'
import Home from './Home';
import AboutUs from './AboutUs'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Nav() {
  const nav = ["About us", "Products", "Get involved"];
  return (
    <nav>
      <Link to="/">
        <img className='logo-nav' src='./ecortie-logo.png' />
      </Link>
      <ul id='navbar'>
        {nav.map((item) => (
          <li key={item}><Link to={item}><a>{item}</a></Link></li>
        ))}
      </ul>
      <button id='contact-button' className='green-button'>contact us</button>
    </nav>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="About us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
