import React from 'react'
import myimage from "../myimage.jpg" 
import proj2 from '../images/github.svg'
import proj3 from '../images/linkedin.svg'
import proj4 from '../images/codepen.svg'
export const Footer = () => {
    return (
        <div class = "footer">
        <div class = "name">
            <h1>Rohit Kumar © 2021</h1>
        </div>
        <div class = "main-infoo">
            <a href="https://github.com/rk891014" target="_blank">
                <img class="myimage1" src={proj2} alt="my image" width="35px" height="35px" />
            </a>
            <a href="https://www.linkedin.com/in/rohit-kumar-8a5a45192/" target="_blank">
                <img class="myimage2" src={proj3} alt="my image" width="35px" height="35px"/>
            </a>
            <a href="https://rkrjptrohit@gmail.com" target="_blank">
                <img class="myimage3" src={proj4} alt="my image" width="35px" height="35px"/>
            </a>
            
      </div>
      
</div>
     

    )
}
export default Footer