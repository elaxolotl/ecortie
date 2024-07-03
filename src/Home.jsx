import './App.css'
import { useState } from 'react';
import ParkIcon from '@mui/icons-material/Park';
import VerifiedIcon from '@mui/icons-material/Verified';
import LoopIcon from '@mui/icons-material/Loop';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HeroText() {
    return (
        <div className='background'>
            <p className='header'>empowering environmental conservation</p>
            <h1>Join Us in <br /> <span>Protecting</span> <br /> Our Planet</h1>
            <div className='hero-description'>
                <p className='hero-small-text'>Join Us in Creating a Sustainable Future for Generations to come, and Save our Planet on the way!</p>
            </div>
            <div id='action-buttons'>
                <button className='green-button' id='desktop-btn'>Buy our products</button>
                <button className='green-button' id='desktop-btn'>Sell us your nettles</button>
            </div>
            <button className='green-button' id='mobile-hero-btn'><p>Discover Ecortie</p> <KeyboardArrowDownIcon /></button>
        </div>
    )
}

function HeroImage() {
    return (
        <div id='hero-img'>
            <div id='card'>
                <div className='background'>
                    <h4>Zero waste</h4>
                    <p>Ecortie is commited to a zero waste initiative through the whole production process</p>
                </div>
            </div>
            <div>
                <img src="./Subtract.png" alt="stinging nettle" className='hero-img-desktop' />
            </div>
            <div id='card'>
                <div className='background'>
                    <h4>Job creation</h4>
                    <p>In the fields of agriculture, production, distribution, and retail</p>
                </div>
            </div>
        </div>
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
        <div id='intro'>
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
            <button className='green-button'>Learn more about us</button>
        </div>
    )
}

function Benefits() {
    const benefits = [
        {
            name: 'Eco-friendly',
            icon: <ParkIcon />,
            text: 'Made from natural ingredients',
            image: "./eco-friendly.jpg"
        },
        {
            name: 'Effective',
            icon: <VerifiedIcon />,
            text: 'Boosts plant growth naturally',
            image: "./effective.jpg"
        },
        {
            name: 'Sustainable',
            icon: <LoopIcon />,
            text: 'Promotes eco-friendly gardening',
            image: "./sustainable.jpg"
        },
    ]

    return (
        <div id='benefits'>
            <p className='header'>benefits</p>
            <h1>How <span>Ecortie</span> helps</h1>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates iure ab libero.</p>
            <div className='cards-list'>
                {benefits.map((item) => (
                    <div className='card'>
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
    const [expandedIndex, setExpandedIndex] = useState(0);

    const products = [
        {
            name: "Ecortie",
            price: "70dt",
            image: "https://www.allpackchina.com/wp-content/uploads/2023/11/Protection-Against-Environmental-Agents.jpg"
        },
        {
            name: "Ortea",
            price: "90dt",
            image: "https://www.allpackchina.com/wp-content/uploads/2023/11/Protection-Against-Environmental-Agents.jpg"
        },
        {
            name: "Ortie+",
            price: "13dt",
            image: 'https://www.allpackchina.com/wp-content/uploads/2023/11/Protection-Against-Environmental-Agents.jpg'
        }
    ]

    const toggleExpand = (index) => {
        if (expandedIndex !== index) {
            setExpandedIndex(index);
        }
    };

    return (
        <div id='products'>
            <p className='header'>Products</p>
            <div className='products-title'>
                <div>
                    <h1>What <span>Ecortie</span> makes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus error neque culpa cum eligendi quibusdam quo.</p>
                </div>
                <div>
                    <button className='green-button'>See all of our products</button>
                </div>
            </div>
            <div id='cards'>
                {products.map((item, index) => (
                    <div
                        className={`card ${expandedIndex === index ? 'expanded' : ''} ${index >= products.length - 2 ? 'left-expand' : ''}`}
                        onClick={() => toggleExpand(index)}
                        key={index}
                    >
                        <div className={`strip ${expandedIndex === index ? 'open' : 'closed'} ${index === 0 ? 'first-strip' : ''} ${index >= products.length - 2 ? 'last-two-strips' : ''}`}>
                            <h3>{item.name}</h3>
                        </div>
                        {expandedIndex === index && (
                            <div className="product-details">
                                <div className="details-title">
                                    <div>
                                        <h3>{item.name}</h3><h4>{item.price}</h4>
                                    </div>
                                    <div>
                                        <button className='green-button' id='mobile-products-btn'>Buy this</button>
                                    </div>
                                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur sit,
                                        voluptas totam iure nam corrupti fugiat debitis ea, reprehenderit dolore laboriosam quo aspernatur tempore?
                                        Molestias voluptatibus ut iure nobis.</p>
                                </div>
                                <div className="details-img">
                                    <img src={item.image} alt={item.name} className='product-img' />
                                    <div id='card'>
                                        <div className="background">
                                            <span>
                                                <h4>How to use</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, harum velit
                                                    tempora veniam veritatis aliquid doloribus expedita eos ratione necessitatibus,
                                                    ipsum placeat voluptas natus tenetur at ipsa unde ut maiores.</p>
                                                <button className='green-button'>Buy this</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

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
            <input type="submit" className='green-button' />
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