import React,{useEffect} from 'react'
import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import proj5 from '../images/proj5.jpg'
import mrkl from '../images/mrkl.jpg'
import gfg from '../images/GeeksforGeeks.png'
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
                    title="Geeks For Geeks"
                    imageUrl={gfg}
                    body="Developed Comment System for articles, videos with features
                    like upvote, downvote, reply, parent child comment relations. 
                    Worked with Exoplayer for integrating geeksforgeeks free as
                    well as paid Videos with MVVM Architecture & Data Binding."
                    btntext = "Click Me"
                    url="https://play.google.com/store/apps/details?id=free.programming.programming"
                    fromtowhen = "(Apr 2022 – Present)"
                    />
            </div>
            <div className="card-view" data-aos = "fade-left">
                <Card
                    title="Merkle Sokrati"
                    imageUrl={mrkl}
                    body="Worked on their biggest client ultratech's app utec partner and utec. Developed new and
                    complex screens and added custom animations, Utec Partner is a one-stop application for all home-building and real estate needs with unique features"
                    btntext = "Click Me"
                    url="https://play.google.com/store/apps/details?id=com.ultratech.utec&hl=en_US"
                    fromtowhen = "(Jan 2021 – Apr 2022)"
                    />
            </div>
            <div className="card-view" data-aos = "fade-right">
                <Card
                    title="Gobal Free School"
                    imageUrl={gfs}
                    body="Development of app dealing with REST Api calls,design and management
                     of MYSQL database, managing resource load on server, features updated on app. 
                     These platforms are used by institutes as a digital library. The aim is to provide world-class education content"
                    btntext = "Click Me"
                    url = "https://play.google.com/store/apps/details?id=com.global.studant&hl=en_US"
                    fromtowhen = "(Oct 2020 – Jan 2021)"
                    />
            </div>
            <div className="card-view" data-aos = "fade-right">
                <Card
                    title="Perfresh"
                    imageUrl={prfs}
                    body="An E-commerse management system consisting of four applications -
                    packing, delivery ,client and a customer app in which customer can
                     order groceries, vegetables, cakes and daily essential items. Perfresh is a 24x7 app that delivers anything to your doorstep in 25 minutes. "
                    btntext = "Click Me"
                    url="https://play.google.com/store/apps/details?id=com.perfresh.food_delivering_app&hl=en_US"
                    fromtowhen = "(May 2020 – Sep 2020)"
                    />
            </div>
            
        
        </div>
    </div>
    </Parallax>
    )
}

export default Experience
// rafc