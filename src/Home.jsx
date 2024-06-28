import './App.css'


function Hero() {
    return (
        <div id='hero'>
            <div className='hero-text'>
                <p>empowering environmental conservation</p>
                <h1>Join Us in <br /> <span>Protecting</span> <br /> Our Planet</h1>
                <div className='hero-description'>
                    <p>Join Us in Creating a Sustainable Future for Generations to come, and Save our Planet on the way!</p>
                </div>
                <div id='action-buttons'>
                    <button>Buy our products</button>
                    <button>Sell us your nettles</button>
                </div>
            </div>
            <div className="hero-img">
                <img src="./Subtract.png" alt="stinging nettle" />
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
                    top: "470px",
                    left: "1200px"
                }}>
                    <div className='background'>
                        <h4>Job creation</h4>
                        <p>In the fields of agriculture, production, distribution, and retail</p>
                    </div>
                </div>
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
            <input type="submit" className='submit'/>
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
                    <img src='./facebook-svg.svg' alt="facebook"/>
                    <img src='./linkedin-svg.svg' alt="linkedin"/>
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
            <Products />
            <Contact />
        </>
    )
}

export default Home