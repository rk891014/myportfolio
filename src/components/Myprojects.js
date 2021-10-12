import React,{useEffect} from 'react'
import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import proj5 from '../images/proj5.jpg'
import wdng from '../images/wdng.jpg'
import fitcurve from '../images/fitcurve.png'
import myimage from "../myimage.jpg"
import Aos from "aos";
import "aos/dist/aos.css" 
import Card from "./Card";

export const Myprojects = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        
        <div class = "project-info" id="ProjectSection">
            <h1 data-aos = "fade-up">Projects</h1>
     
            
            <div className="project-container">
                <div className="card-view" data-aos = "fade-left">
                    <Card
                        title="FitCurve"
                        imageUrl={fitcurve}
                        body="Its a girls fitness app consisting of all homexercises. It is
                        our own startup with a team of 5 people and it has beautiful
                        UI design,shooted almost 300 excercises "
                        btntext = "View App"
                        />
                </div>
                <div className="card-view" data-aos = "fade-right">
                    <Card
                        title="#Ashbhi"
                        imageUrl={wdng}
                        body="A wedding app with integrated social media platorm on android
                        studio using firebase. "
                        btntext = "View App"
                        />
                </div>
                
                
            
            </div>
        </div>

    )
}
export default Myprojects