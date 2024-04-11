import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
/*import axios from 'axios';*/
import advertising from "../assets/advertising.png";
import architecture from "../assets/architecture.png";
import industrialDesign from "../assets/industrialDesign.png";
import interiorDesign from "../assets/interiorDesign.png";
import landscaping from "../assets/landscaping.png";
import simbolos from "../assets/simbolos.png";


function Home(){


    useEffect(()=>{
        Aos.init(1500); //Necesario para inicializar el Aos al cargarse el componente y tener los efectos de deslizarse al scrollear
    },[])

    /*async function sendEmail(){
        await axios.post('send-email.php');
    }*/
    return(
        <div>
            <div id="gridHome" className="container text-center">
                <div className="row">
                    <div className="col-sm" id="aboutUs" data-aos="fade-right">
                        <h1 className="aboutUs" data-aos="fade-right" data-aos-duration="1000">
                            <p>ABOUT US</p>
                        </h1>
                        <p className="aboutUsText" data-aos="fade-right" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={advertising} alt="Advertising" data-aos="fade-right"/>
                        <img src={simbolos} id="simbolos" alt="Lineas verticales" data-aos="fade-right"/>
                        <h2 className="commercialArchitecture" data-aos="fade-right" data-aos-duration="1000">
                            <p>ADVERTISING</p>
                        </h2>
                        <p className="commercialArchitectureText" data-aos="fade-right" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                    <div className="col-sm">
                        <img src={architecture} alt="Architecture" data-aos="fade-left"/>
                        <img src={simbolos} id="simbolos" alt="Lineas verticales" data-aos="fade-left"/>
                        <h2 className="realEstateSale" data-aos="fade-left" data-aos-duration="1000">
                            <p>ARCHITECTURE</p>
                        </h2>
                        <p className="realEstateSaleText" data-aos="fade-left" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={industrialDesign} alt="industrialDesign" data-aos="fade-right"/>
                        <img src={simbolos} id="simbolos" alt="Lineas verticales" data-aos="fade-right"/>
                        <h2 className="designIdeas" data-aos="fade-right" data-aos-duration="1000">
                            <p>INDUSTRIAL DESIGN</p>
                        </h2>
                        <p className="designIdeasText" data-aos="fade-right" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                    <div className="col-sm">
                        <img src={interiorDesign} alt="interiorDesign" data-aos="fade-left"/>
                        <img src={simbolos} id="simbolos" alt="Lineas verticales" data-aos="fade-left"/>
                        <h2 className="designIdeas" data-aos="fade-left" data-aos-duration="1000">
                            <p>INTERIOR DESIGN</p>
                        </h2>
                        <p className="designIdeasText" data-aos="fade-left" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                </div>
                <div className="row lastGridHomeRow">
                    <div className="col-sm">
                        <img src={landscaping} alt="Landscaping" data-aos="fade-right"/>
                        <img src={simbolos} id="simbolos" alt="Lineas verticales" data-aos="fade-right"/>
                        <h2 className="designIdeas" data-aos="fade-right" data-aos-duration="1000">
                            <p>LANDSCAPING</p>
                        </h2>
                        <p className="designIdeasText" data-aos="fade-right" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?
                        </p>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
            <section id="homeMail">

                <form method="post" action="send-email.php">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" name="name" required></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required></input>
                    
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" required></input>

                    <label htmlFor="message">Contact us:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button>Send</button>
                
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