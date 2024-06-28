import './App.css'
import ParkIcon from '@mui/icons-material/Park';
import VerifiedIcon from '@mui/icons-material/Verified';
import LoopIcon from '@mui/icons-material/Loop';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HeroText() {
    return (
        <div className='background'>
            <p className='hero-small-text'>empowering environmental conservation</p>
            <h1>Join Us in <br /> <span>Protecting</span> <br /> Our Planet</h1>
            <div className='hero-description'>
                <p className='hero-small-text'>Join Us in Creating a Sustainable Future for Generations to come, and Save our Planet on the way!</p>
            </div>
            <div id='action-buttons'>
                <button className='green-button' id='desktop-btn'>Buy our products</button>
                <button className='green-button' id='desktop-btn'>Sell us your nettles</button>
            </div>
            <button className='green-button' id='mobile-hero-btn'><p>Discover Ecortie</p> <KeyboardArrowDownIcon/></button>
        </div>
    )
}

function HeroImage() {
    return (
        <>
            <img src="./Subtract.png" alt="stinging nettle" className='hero-img-desktop' />
            <img src='./hero-mobile.png' alt='stinging nettle' className='hero-img-phone' />
            <div id='card' style={{
                top: "350px",
                left: "600px"
            }}>
                <div className='background'>
                    <h4>Zero waste</h4>
                    <p>Ecortie is commited to a zero waste initiative through the whole production process</p>
                </div>
            </div>
            <div id='card' style={{
                top: "65vh",
                left: "80vw"
            }}>
                <div className='background'>
                    <h4>Job creation</h4>
                    <p>In the fields of agriculture, production, distribution, and retail</p>
                </div>
            </div>
        </>
    )
}

function Hero() {
    return (
        <div id='hero'>
            <div className='hero-text'>
                <HeroText />
            </div>
            <div className="hero-img">
                <HeroImage />
            </div>
        </div>
    )
}

function Intro() {
    return (
        <div className='intro'>
            <p className='header'>our story</p>
            <div className='content'>
                <div>
                    <p className='title'><span>Ecortie</span> was born from a shared mission</p>
                </div>
                <div>
                    <p className='description'>
                        Ecortie revolutionizes agriculture by harnessing
                        the overlooked potential of stinging nettles,
                        transforming them into a premium fertilizer.
                        We enhance this blend further by incorporating
                        used coffee grounds and tea leaves, ensuring optimal
                        nutrient enrichment for soil health. Our dedication to
                        sustainability drives us to offer an affordable alternative
                        to traditional fertilizers, empowering small-scale farmers
                        to achieve robust yields without compromising on quality. <br />
                        <p className='second-paragraph'>
                            Emphasizing a zero-waste philosophy, Ecortie not only supports
                            ecological balance but also creates valuable job opportunities
                            in communities facing high unemployment rates.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

function Benefits() {
    const benefits = [
        {
            name:'Eco-friendly',
            icon:<ParkIcon/>,
            text:'Made from natural ingredients',
            image: "./eco-friendly.jpg"
        },
        {
            name:'Effective',
            icon:<VerifiedIcon/>,
            text:'Boosts plant growth naturally',
            image: "./effective.jpg"
        },
        {
            name:'Sustainable',
            icon:<LoopIcon/>,
            text:'Promotes eco-friendly gardening',
            image: "./sustainable.jpg"
        },
    ]

    return (
        <div id='benefits'>
            <p className='header'>benefits</p>
            <h1>How <span>Ecortie</span> helps</h1>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates iure ab libero.</p>
            <div className='card'>
                {benefits.map((item)=>(
                    <div className='sub-card'>
                        <img src={item.image} alt={item.name} />
                        <div className='card-text'>
                            <span className='icon'>{item.icon}</span>
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Products() {
    const products = [
        {
            name: "Ecortie",
            price: "70dt",
            image: "https://i0.wp.com/packagingoftheworld.com/wp-content/uploads/2023/11/Famco-Bone-Meal1.jpg?w=1920&ssl=1"
        },
        {
            name: "Ortea",
            price: "90dt",
            image: "https://pouchme.b-cdn.net/wp-content/uploads/2023/01/Fertilizer-Bags-Mockup-1500x1500px.jpg"
        },
        {
            name: "Ortie+",
            price: "13dt",
            image: 'https://www.foodpropack.in/img/images/mobile/sustainability-banner-top.png'
        }
    ]
    return (
        <div id='products'>
            <h1>Our Products</h1>
            <div id='cards'>
                {products.map((item) => (
                    <div className='card'>
                        <img src={item.image} alt={item.name} className='product-img' />
                        <div id='card'>
                            <div className="background">
                                <h3>{item.name}</h3>
                                <span>
                                    <p>{item.price}</p>
                                    <img src='./bag.svg' className='svg' />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

function Form() {
    return (
        <form>
            <div id='contact-form'>
                <div>
                    <label>First name</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label>Last name</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label><br />
                    <input type="email" />
                </div>
                <div>
                    <label>Phone number</label><br />
                    <input type="number" />
                </div>
                <div className='textarea'>
                    <label>Message</label><br />
                    <textarea name="message"></textarea>
                </div>
            </div>
            <input type="submit" className='submit' />
        </form>
    )
}

function Contact() {
    return (
        <div id='contact'>
            <div className='container'>
                <div className='sub-container'>
                    <h1>Contact us</h1>
                    <Form />
                </div>
                <div className='sub-container'>
                    <h2>Contact information</h2>
                    <p>contact info here..</p>
                    <p>adress</p>
                    <p>number</p>
                    <h3>Follow us</h3>
                    <img src='./facebook-svg.svg' alt="facebook" />
                    <img src='./linkedin-svg.svg' alt="linkedin" />
                    <img src="./tiktok-svg.svg" alt="tiktok" />
                </div>
            </div>
        </div>
    )
}

function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Benefits />
            <Products />
            <Contact />
        </>
    )
}

export default Home