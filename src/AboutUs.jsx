import './App.css'
import GrassIcon from '@mui/icons-material/Grass';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function About() {
    const process = [
        {
            number: "1",
            title: "initial collection",
            description: "We begin by gathering stinging nettles, used coffee grounds, and tea leaves from local sources, ensuring high-quality, organic materials. This initial collection supports local communities and reduces waste by repurposing natural resources.",
            icon: <GrassIcon />
        },
        {
            number: "2",
            title: "Steeping in water",
            description: "The stinging nettles are steeped in water to extract their rich nutrients, creating a powerful base for our fertilizers. This process ensures that the beneficial properties of the nettles are fully utilized.",
            icon: <OilBarrelIcon />
        },
        {
            number: "3",
            title: "Straining",
            description: "After steeping, the mixture is carefully strained to remove any solid particles, resulting in a smooth, nutrient-rich liquid. This final product is then ready to be blended with other ingredients to create our eco-friendly fertilizers",
            icon: <FilterAltIcon />
        },


    ]
    return (
        <div id="about-us">
            <h1>About us</h1>
            <div className="story">
                <div>
                    <p className='header'>Our story</p>
                    <p>We are a team of young, passionate
                        individuals from Tunis Business School,
                        united by our commitment to sustainability
                        and improving the Tunisian economy. Born out
                        of a competition within the "3ZERO TBS" club,
                        our mission is to create eco-friendly fertilizers
                        from natural resources like stinging nettles,
                        used coffee grounds, and tea leaves, supporting
                        both local farmers and the environment. At Ecortie,
                        we strive to leave a meaningful impact on the world
                        by promoting sustainable agricultural practices and
                        fostering economic growth in Tunisia.</p>
                </div>
                <img src="/group-picture.jpg" alt="group-picture" />
            </div>
            <div className='mission'>
                <img src="https://www.almanac.com/sites/default/files/users/The%20Editors/shutterstock_2153212093.jpg" alt="group-picture" />
                <div>
                    <p className='header'>Our mission</p>
                    <p>At Ecortie, our mission is to revolutionize
                        agriculture with sustainable, eco-friendly
                        fertilizers made from stinging nettles, used
                        coffee grounds, and tea leaves. We aim to support
                        local farmers, enhance soil health, and promote
                        greener, more sustainable farming practices.
                        Through innovation and dedication, we strive to
                        improve the Tunisian economy while making a positive
                        impact on the environment.</p>
                </div>
            </div>
            <div className="process">
                <h1>Our process</h1>
                <p className='header'>how it works</p>
                <div className="cards-list">
                    {process.map((item, index) =>
                        <div className='card'>
                            <h1>{(index + 1).toString().padStart(2, '0')}</h1>
                            <div className='text'>
                                <div className="title">
                                    <span className='icon'>{item.icon}</span>
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About