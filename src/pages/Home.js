import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Home(){
    useEffect(()=>{
        Aos.init(1500); //Necesario para inicializar el Aos al cargarse el componente y tener los efectos de deslizarse al scrollear
    },[])
    return(
        <div>
            <div id="gridHome">
                <h1 className="aboutUs" data-aos="fade-right" data-aos-duration="1000">
                    <p>ABOUT US</p>
                </h1>
                <p className="aboutUsText" data-aos="fade-left" data-aos-duration="1000">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
                </p>
                <h2 className="commercialArchitecture" data-aos="fade-left" data-aos-duration="1000">
                    <p>COMMERCIAL ARCHITECTURE</p>
                </h2>
                <p className="commercialArchitectureText" data-aos="fade-right" data-aos-duration="1000">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
                </p>
                <h2 className="realEstateSale" data-aos="fade-right" data-aos-duration="1000">
                    <p>REAL ESTATE SALE</p>
                </h2>
                <p className="realEstateSaleText" data-aos="fade-left" data-aos-duration="1000">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
                </p>
                <h2 className="designIdeas" data-aos="fade-left" data-aos-duration="1000">
                    <p>DESIGN IDEAS</p>
                </h2>
                <p className="designIdeasText" data-aos="fade-right" data-aos-duration="1000">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
                </p>
            </div>
            <section id="homeMail">
                <form>
                    <label forHTML="firstName">First Name</label>
                    <input id="firstName"></input>
                    <label forHTML="lastName">Last Name</label>
                    <input id="lastName"></input>
                    <label forHTML="email">Email</label>
                    <input id="email"></input>
                    <label forHTML="textareaHome">Contact us:</label>
                    <textarea id="textareaHome"></textarea>
                </form>
            </section>
            <footer id="footer">
                Instagram<br>
                </br>
                Facebook<br>
                </br>
                LinkedIn
            </footer>
        </div>
    )
}

export default Home;