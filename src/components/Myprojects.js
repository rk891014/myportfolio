import React from 'react'
import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import proj5 from '../images/proj5.jpg'
import myimage from "../myimage.jpg" 
import Card from "./Card";

export const Myprojects = () => {
    return (
        
        <div class = "project-info">
            <h1>Projects</h1>
     
            
            <div className="project-container">
                <div className="card-view">
                    <Card
                        title="FitCurve"
                        imageUrl={proj1}
                        body="Its a girls fitness app consisting of all homexercises. It is
                        our own startup with a team of 5 people and it has beautiful
                        UI design,shooted almost 300 excercises "
                        />
                </div>
                <div className="card-view">
                    <Card
                        title="#Ashbhi"
                        imageUrl={proj2}
                        body="A wedding app with integrated social media platorm on android
                        studio using firebase. "
                        />
                </div>
                
            
            </div>
        </div>

    )
}
export default Myprojects