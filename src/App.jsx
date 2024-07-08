import './App.css'
import './mediaQueries.css'
import Home from './Home';
import AboutUs from './AboutUs'
import Products from './Products'
import GetInvolved from './GetInvolved'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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

function Footer() {
  const nav = ["About us", "Products", "Get involved"];
  return (
      <footer>
          <img src="/ecortie-logo-white.png" alt="ecortie-logo" className='logo' />
          <ul>
              {nav.map((item) => (
                  <li><Link to={item}><a>{item}</a></Link></li>
              ))}
          </ul>
          <div>
              <h3>follow us</h3>
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
          </div>
      </footer>
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
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
