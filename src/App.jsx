import './App.css'
import Hero from './Hero';

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
      <Hero/>
    </>
  )
}

export default App
