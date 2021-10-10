import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import { Stroke } from 'tsparticles/Options/Classes/Particles/Stroke';
import {Experience} from "./components/Experience";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Myprojects} from "./components/Myprojects";


function App() {
  return (
    <>
    <Particles 
                params={{
                  particles: {
                    number: {
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 900,
                      }
                    },"color": {
                      "value": "#0000ff"
                    },
                    shape: {
                      type: "star",
                      "stroke": {
                        width: 4,
                        color: "#f9ab00"
                      }
                    }
                  },
                }} />
    <Navbar/>
    <Header/>
    {/* <Experience/> */}
    <Myprojects/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
