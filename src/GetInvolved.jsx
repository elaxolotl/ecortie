import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function GetInvolved() {
    return (
        <>
            <div id="get-involved-page">
                <h1>Get Involved</h1>
                <p>Join us in our mission to promote sustainability and support local farmers by getting involved with Ecortie. Here are some ways you can contribute:</p>

                <div className="involvement-option">
                    <img src="./nettles-involved.jpg" alt="nettles" />
                    <div>
                        <h2>Sell Stinging Nettles</h2>
                        <p>Become a vital part of Ecortie's sustainable mission by selling stinging nettles. By providing this crucial raw material, you help us produce
                            our eco-friendly fertilizers while also supporting local agriculture. Reach out to learn about our requirements, benefits, and how you can
                            contribute to a greener future.</p>
                        <Link to="/#contact"><button className="green-button">Contact Us</button></Link>
                    </div>
                </div>

                <div className="involvement-option">
                    <div>
                        <h2>Volunteer Opportunities</h2>
                        <p>Join our dedicated team of volunteers and make a significant impact on sustainability and local agriculture. Whether you help with production,
                            community outreach, or environmental initiatives, your efforts will be invaluable. Sign up today and become part of a movement that's making
                            a real difference.</p>
                        <Link to="/#contact"><button className="green-button">Contact Us</button></Link>
                    </div>
                    <img src="./volunteer.jpg" alt="volunteer" />
                </div>

                <div className="involvement-option">
                    <img src="./partner.png" alt="partner" />
                    <div>
                        <h2>Partner with Us</h2>
                        <p>Forge a meaningful partnership with Ecortie to promote sustainability and support local farmers. Businesses, schools, and organizations can
                            collaborate with us to implement eco-friendly practices and contribute to the local economy. Contact us to explore partnership opportunities
                            and make a collective impact.</p>
                        <Link to="/#contact"><button className="green-button">Contact Us</button></Link>
                    </div>
                </div>

                <div className="involvement-option">
                    <div>
                        <h2>Donate</h2>
                        <p>Support Ecortie's mission and projects by making a donation. Your financial contributions enable us to continue developing sustainable products,
                            supporting local farmers, and promoting environmental conservation. Every donation helps us make a positive and lasting impact.</p>
                        <Link to="/#contact"><button className="green-button">Contact Us</button></Link>
                    </div>
                    <img src="./donate.jpg" alt="donate" />
                </div>
            </div>
        </>
    );
}

export default GetInvolved;
