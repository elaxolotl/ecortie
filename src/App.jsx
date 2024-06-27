import './App.css'
import Home from './Home';

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
      <button id='contact-button'>contact us</button>
    </nav>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Home/>
    </>
  )
}

export default App
