import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import RenderPoster from "../assets/renderbackground1poster.png";
import RenderVideo from "../assets/renderbackground1.mp4";
import "../main.css"

function Layout(){
    return(
        <div>
            <h1>Page Title/Logo</h1>
            <Navbar/>
            <video id="backgroundVideo" autoPlay loop muted poster={RenderPoster}>
                <source src={RenderVideo} type="video/mp4"/>
            </video>
            <Outlet/>
            <Home/>
        </div>
    )
}

export default Layout;