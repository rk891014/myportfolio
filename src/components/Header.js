import React from "react"
import myimage from "../myimage.jpg" 
import Typed from 'react-typed';
import ReactRoundedImage from "react-rounded-image";

const Header = () => {
    return (
        <div class = "header-wraper">
            <div class = "main-info">
              <h1>Hi There, I'm Rohit Kumar</h1>
              <Typed
                    className="typed-text"
                    strings={["Android Developer","Web Developer","Corel Designer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                {/* <img class="myimage" src={myimage} alt="my image" /> */}
                <ReactRoundedImage
                        
                    class="myimage"
                    image={myimage}
                    roundedColor="#C0C0C0"
                    imageWidth="270"
                    imageHeight="300"
                    roundedSize="10"
                    hoverColor="#DD1144"
                />
                

            </div>
        </div>
    )
}

export default Header
