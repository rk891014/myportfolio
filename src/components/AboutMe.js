import React from 'react'
import proj2 from '../images/agile.png'
import proj4 from '../images/responsive.png'
import proj5 from '../images/performance.png'
import proj6 from '../images/design.png'
import Progressbar from "./Progressbar";
export const AboutMe = () => {
    return (

        <div className ="">
        <div class = "about-info" id="AboutSection">
            <h1 data-aos = "fade-right">About</h1>
                <h4 >I love to transform ideas into reality using code.
                     I am passionate about using Javascript and animations to create awesome user experiences.</h4>
                <div className="about-images">
                    <div className="about-images1">
                        <img class="myimage2" src={proj4}  width="135px" height="135px"/>
                        <h4>Responsive</h4>
                    </div>
                    <div className="about-images1">
                        <img class="myimage2" src={proj6}  width="135px" height="135px"/>
                        <h4>Design</h4>
                    </div>
                    <div className="about-images1">
                        <img class="myimage2" src={proj5}  width="135px" height="135px"/>
                        <h4>Performance</h4>
                    </div>
                    <div className="about-images1">
                        <img class="myimage2" src={proj2}  width="135px" height="135px"/>
                        <h4>Agile</h4>
                    </div>
                </div>

        </div>

        

        <div className="progressbarr" data-aos = "fade-left" >
                    <Progressbar
                        title="Html5"
                        value="60%"
                        />
                        <Progressbar
                        title="Css3"
                        value="50%"
                        />
                        <Progressbar
                        title="Javascript"
                        value="45%"
                        />
                        <Progressbar
                        title="Android"
                        value="70%"
                        />
                        <Progressbar
                        title="Reactjs"
                        value="60%"
                        />
                        <Progressbar
                        title="Nodejs"
                        value="50%"
                        />
                        <Progressbar
                        title="java"
                        value="70%"
                        />
                        <Progressbar
                        title="C"
                        value="60%"
                        />
                        <Progressbar
                        title="C++"
                        value="70%"
                        />
                </div>
        </div>   
    )
}
export default AboutMe