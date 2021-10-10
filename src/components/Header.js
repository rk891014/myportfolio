import React from "react"
import myimage from "../myimage.jpg" 
import Typed from 'react-typed';
const Header = () => {
    return (
        <div class = "header-wraper">
            <div class = "main-info">
              <h1>Hi There,I'm Rohit Kumar</h1>
              <Typed
                    className="typed-text"
                    strings={["App Developer","Web Developer","Backend Developer","CorelDesigner"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <img class="myimage" src={myimage} alt="my image" />
            </div>
        </div>
    )
}

export default Header
