import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
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

function GetInvolved() {
    return (
        <>
            <div id="products-page">
                <h1>Get involved</h1>
            </div>
            <Footer/>
        </>
    )
}

export default GetInvolved