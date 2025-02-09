import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import {motion} from 'framer-motion';

const Services = () => {
  return (
    <div id="services" className="services">
      <motion.div 
        initial={{opacity:0,translateX:"100%"}}
        whileInView={{opacity:1,translateX:0}}
        transition={{duration:1}}
      
      className="services-title">
        <h1>My Services</h1>
      </motion.div>
      <motion.div
        initial={{opacity:0,translateX:"-100%"}}
        whileInView={{opacity:1,translateX:0}}
        transition={{duration:1}}
       className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="services-format"
            style={{
              animationDelay: `${index * 0.5}s`, // Stagger the animations
            }}
          >
            <h3>{service.s_no}</h3>
            <h3>{service.s_name}</h3>
            <h3>{service.s_desc}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
