import { useState } from "react";
import "../main.css";

function Navbar(){

    const [display, setDisplay] = useState("none");

    function displayList(){
        setDisplay("inline");
        console.log("enter");
    }

    function hideList(){
        setDisplay("none");
    }

    return(
        <div id="navBar">
        <ul>
            <li>
                Work
            </li>
            <li onMouseEnter={displayList} onMouseLeave={hideList}>
                Projects
                <ul style={{display: display}} id="projectList">
                    <li>
                        Advertising
                    </li>
                    <li>
                        Landscaping
                    </li>
                    <li>
                        Animation Studies
                    </li>
                    <li>
                        Interior Design
                    </li>
                    <li>
                        Industrial Design
                    </li>
                    <li>
                        Videogame Design
                    </li>
                    <li>
                        Architecture
                    </li>
                </ul>
            </li>
            <li>
                References
            </li>
            <li>
                Work with Us
            </li>
            <li>
                Budget
            </li>
        </ul>
        </div>
    )
}

export default Navbar;