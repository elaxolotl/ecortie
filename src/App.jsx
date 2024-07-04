import './App.css'
import './mediaQueries.css'
import Home from './Home';
import AboutUs from './AboutUs'
import Products from './Products'
import GetInvolved from './GetInvolved'
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
      <Link to="/#contact"><button id='contact-button' className='green-button'>contact us</button></Link>
    </nav>
  )
}


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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
        <Route path="Products" element={<Products />} />
        <Route path="Get involved" element={<GetInvolved />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
