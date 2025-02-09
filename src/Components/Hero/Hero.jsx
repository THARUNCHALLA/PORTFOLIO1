import React from 'react';
import './Hero.css';
import profile from '../../assets/N14.jpg';
import {motion} from 'framer-motion';


const Hero = () => {
  return (
    <motion.div 
    initial={{opacity:0,rotateX:"90deg"}}
    whileInView={{opacity:1,rotateX:0}}
    transition={{duration:1.5}}
    id='hero' className='hero'>
      <img  className="hero-img"src={profile} alt=""/>
       <h1><span> Mondem Nitheesh </span><br></br> Full Stack Developer</h1>
       <motion.div
         initial={{opacity:0,translateY:"50%"}}
         whileInView={{opacity:1,translateY:0}}
         transition={{duration:2}}
       
       className="hero-action">
        <div className="hero-connect">
        <a href="#contact" offset="50" className="nav-link">
          
          Connect with me
          </a>
          
          </div>
        <div className="hero-resume" ><a href="https://drive.google.com/file/d/1SAiPgNZzW8HZJpRG6oMmpf5rkpHj8uom/view?usp=sharing">My resume</a></div>
       </motion.div>
    </motion.div>
  )
}

export default Hero
