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

export default Hero