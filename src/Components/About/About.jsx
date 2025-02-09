import React from 'react'
import './About.css';
import image1 from '../../assets/html.png';
import image2 from '../../assets/Css.png';
import image3 from '../../assets/Bootstrap.png';
import image4 from '../../assets/Js.png';
import image5 from '../../assets/React.png';
import image6 from '../../assets/Rest.jpeg';
import image7 from '../../assets/sql.png';
import image8 from '../../assets/spring.png';
import image9 from '../../assets/Springboot.jpeg';
import image10 from '../../assets/Springsecurity.jpeg';
import image11 from '../../assets/hibernate.png';
import image12 from '../../assets/Mongo.png';
import profile from '../../assets/N14.jpg';

 import {motion} from 'framer-motion';






const About = () => {


  return (
   
    <div className="About"  id="about">
       <motion.div 
       initial={{opacity:0,translateX:"-100%"}}
       whileInView={{opacity:1,translateX:0}}
       transition={{duration:2}}
   
       className="photo">
    <img src={profile} alt=""/>
       </motion.div>
       <div className='content1'>

        <motion.div 
        initial={{opacity:0,translateX:"100%"}}
        whileInView={{opacity:1,translateX:0}}
        transition={{duration:2}}
        className='aboutme'>
          <h1 className='about-title' >About Me </h1>
          
          <p  >I am a dedicated Java Full Stack Developer with expertise in building responsive frontends using HTML, CSS, JavaScript, and React.js, alongside robust backends with Java, Spring Boot, and Hibernate. Skilled in creating RESTful APIs and managing databases like MySQL and MongoDB, I aim to deliver scalable and secure web solutions. I have hands-on experience with tools like Git, Postman, and VS Code, ensuring smooth development workflows. With a strong passion for learning new technologies, I strive to contribute to impactful projects and thrive in collaborative environments.</p>

        </motion.div>
        <motion.h1 
         initial={{opacity:0,translateX:"100%"}}
         whileInView={{opacity:1,translateX:0}}
         transition={{duration:2}}
         className='skill-title'>Skills</motion.h1>

        <motion.div 
        initial={{opacity:0,translateX:"100%"}}
        whileInView={{opacity:1,translateX:0}}
        transition={{duration:2}}
    
        
        className="skills"   >
        
             
             <div className='skill'>
               <img  src={image1} alt=""/>
             </div>
             <div className='skill'>
             <img  src={image2} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image3} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image4} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image5} alt=""/>

             </div>
             <div className='skill'>
             <img src={image6} alt=""/>
             </div>
             <div className='skill'>
             <img  src={image7} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image8} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image9} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image10} alt=""/>

             </div>
             <div className='skill'>
             <img  src={image11} alt=""/>
             </div>
             <div className='skill'>
             <img  src={image12} alt=""/>
             </div>
             
            
        </motion.div>

       </div>
        

</div>

  )
}

export default About