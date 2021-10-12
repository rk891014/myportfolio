import React,{useEffect} from 'react'
import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import proj5 from '../images/proj5.jpg'
import mrkl from '../images/mrkl.jpg'
import prfs from '../images/prfs.jpg'
import gfs from '../images/gfs.png'
import myimage from "../myimage.jpg"
import Aos from "aos";
import "aos/dist/aos.css" 
import Card from "./Card";
import { Parallax } from 'react-parallax';

export const Experience = () => {
    return (
        <Parallax blur={5} bgImage={proj5} bgImageAlt="the cat" strength={20}>
        <div class = "experience-info" id="ExperienceSection">
        <h1 data-aos = "fade-up">Experience</h1>
 
        
        <div className="experience-container">
            <div className="card-view" data-aos = "fade-left">
                <Card
                    title="Merkle Sokrati"
                    imageUrl={mrkl}
                    body="Its a girls fitness app consisting of all homexercises. It is
                    our own startup with a team of 5 people and it has beautiful
                    UI design,shooted almost 300 excercises "
                    btntext = "Click Me"
                    />
            </div>
            <div className="card-view" data-aos = "fade-right">
                <Card
                    title="Gobal Free School"
                    imageUrl={gfs}
                    body="A wedding app with integrated social media platorm on android
                    studio using firebase. "
                    btntext = "Click Me"
                    />
            </div>
            <div className="card-view" data-aos = "fade-right">
                <Card
                    title="Perfresh"
                    imageUrl={prfs}
                    body="A wedding app with integrated social media platorm on android
                    studio using firebase. "
                    btntext = "Click Me"
                    />
            </div>
            
        
        </div>
    </div>
    </Parallax>
    )
}

export default Experience
// rafc