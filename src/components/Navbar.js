import React from "react"
import logo from "../logo.jpg" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"
export const Navbar = () => {
    return (
      
        <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark navbar-full">
        <div class="container">
          <a class="navbar-brand" >
          {/* <img class="logo" src={logo} alt="logo" /> */}
          <div class="logo">
            <span>rkrjptrohit@gmail.com , 9651804942</span>
          </div>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-rg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >Home</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="AboutSection">About me</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="ProjectSection">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="ExperienceSection">Experience</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact">Contact Me</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" href = "https://drive.google.com/file/d/1f64sG1GPTgC3SORAvn-UVZCRlPu7hy-r/view">My Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
