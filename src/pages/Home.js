import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Home(){
    useEffect(()=>{
        Aos.init(1500); //Necesario para inicializar el Aos al cargarse el componente y tener los efectos de deslizarse al scrollear
    },[])
    return(
        <div id="gridHome">
            <h1 className="aboutUs" data-aos="fade-right" data-aos-duration="3000">
                <p>About Us</p>
            </h1>
            <p className="aboutUsText" data-aos="fade-left" data-aos-duration="3000">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
            </p>
            <h2 className="commercialArchitecture" data-aos="fade-left" data-aos-duration="3000">
                <p>Commercial Architecture</p>
            </h2>
            <p className="commercialArchitectureText" data-aos="fade-right" data-aos-duration="3000">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
            </p>
            <h2 className="realEstateSale" data-aos="fade-right" data-aos-duration="3000">
                <p>Real Estate Sale</p>
            </h2>
            <p className="realEstateSaleText" data-aos="fade-left" data-aos-duration="3000">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
            </p>
            <h2 className="designIdeas" data-aos="fade-left" data-aos-duration="3000">
                <p>Design Ideas</p>
            </h2>
            <p className="designIdeasText" data-aos="fade-right" data-aos-duration="3000">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt, fugit ullam distinctio nemo voluptates sequi veniam obcaecati sint nesciunt ipsa repellat repudiandae aspernatur, explicabo, exercitationem voluptatem ex quibusdam. Necessitatibus?</p>
            </p>
        </div>
    )
}

export default Home;