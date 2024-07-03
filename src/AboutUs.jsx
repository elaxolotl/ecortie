import './App.css'
import GrassIcon from '@mui/icons-material/Grass';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from "react-router-dom";


function Footer() {
    const nav = ["About us", "Products", "Get involved"];
    return (
        <footer>
            <img src="/ecortie-logo-white.png" alt="ecortie-logo" className='logo' />
            <ul>
                {nav.map((item) => (
                    <li><Link to="/About us"><a>{item}</a></Link></li>
                ))}
            </ul>
            <div>
                <h3>follow us</h3>
                <img src='./facebook-svg.svg' alt="facebook" />
                <img src='./linkedin-svg.svg' alt="linkedin" />
                <img src="./tiktok-svg.svg" alt="tiktok" />
            </div>
        </footer>
    )
}

function About() {
    const process = [
        {
            number: "1",
            title: "initial collection",
            description: "Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptas, hic animi similique, aut nisi omnis magnam eveniet quis architecto possimus doloribus, commodi nemo cumque labore repudiandae. Dolore numquam incidunt alias.",
            icon: <GrassIcon />
        },
        {
            number: "2",
            title: "Steeping in water",
            description: "Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptas, hic animi similique, aut nisi omnis magnam eveniet quis architecto possimus doloribus, commodi nemo cumque labore repudiandae. Dolore numquam incidunt alias.",
            icon: <OilBarrelIcon />
        },
        {
            number: "3",
            title: "Straining",
            description: "Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptas, hic animi similique, aut nisi omnis magnam eveniet quis architecto possimus doloribus, commodi nemo cumque labore repudiandae. Dolore numquam incidunt alias.",
            icon: <FilterAltIcon />
        },


    ]
    return (
        <>
            <div id="about-us">
                <h1>About us</h1>
                <div className="story">
                    <div>
                        <p className='header'>Our story</p>
                        <p>At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias excepturi
                            sint occaecati cupiditate non provident, similique sunt
                            in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis
                            est et expedita distinctio. Nam libero tempore, cum soluta
                            nobis est eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus
                            saepe eveniet ut et voluptates repudiandae sint et molestiae
                            non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                            ut aut reiciendis voluptatibus maiores alias consequatur aut
                            perferendis doloribus asperiores repellat</p>
                    </div>
                    <img src="/group-picture.jpg" alt="group-picture" />
                </div>
                <div className='mission'>
                    <img src="https://www.almanac.com/sites/default/files/users/The%20Editors/shutterstock_2153212093.jpg" alt="group-picture" />
                    <div>
                        <p className='header'>Our mission</p>
                        <p>At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias excepturi
                            sint occaecati cupiditate non provident, similique sunt
                            in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis
                            est et expedita distinctio. Nam libero tempore, cum soluta
                            nobis est eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus
                            saepe eveniet ut et voluptates repudiandae sint et molestiae
                            non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                            ut aut reiciendis voluptatibus maiores alias consequatur aut
                            perferendis doloribus asperiores repellat</p>
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
            <Footer />
        </>
    )
}

export default About