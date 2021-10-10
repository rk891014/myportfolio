import React from 'react'
import myimage from "../myimage.jpg" 

export const Footer = () => {
    return (
        <div class = "footer">
        <div class = "main-infoo">
            <img class="myimage" src={myimage} alt="my image" />
            <img class="myimage" src={myimage} alt="my image" />
            <img class="myimage" src={myimage} alt="my image" />
          
      </div>
      <div class = "name">
        <h1>Rohit Kumar © 2021</h1>
      </div>
</div>
     

    )
}
export default Footer