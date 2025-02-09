import React from 'react';
import './work.css';
import profile1 from '../../assets/Ecommerce.png';
import profile from '../../assets/Kinghouse.png';
import profile2 from '../../assets/Amazon.png';
import theme_pattern from "../../assets/theme_pattern.svg";
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <>
     
     <div className="work-title">
        <h1>Works</h1>
      </div>
      <div className="work">
      
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="project"
        >
          <img src={profile} alt="King House" />
          <div className="content">
            <p>
            The Kingshukh Guest House webpage uses HTML, CSS, JavaScript, and Bootstrap for a responsive layout. HTML structures sections like header, rooms, gallery, and contact. CSS and Bootstrap manage design and responsiveness. JavaScript adds interactivity with features like a toggle navbar and image sliders. Bootstrap components like carousels and modals enhance the user experience, creating an attractive website clone            </p>
            <a href="https://github.com/nitheeshniranjan/Kingsukh-Guest-House">
              <FaGithub style={{ fontSize: '28px' }} />
            </a>
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="project"
        >
          <img src={profile1} alt="Ecommerce" />
          <div className="content">
            <p>
            A React eCommerce website utilizes React, Bootstrap, and CSS for a dynamic, responsive experience. React components organize pages such as home, products, cart, and checkout. State management (useState, Context API, Redux) handles user and cart data. React Router ensures smooth navigation across pages. Axios/Firebase/Fake API manages and fetches product data. The site is fully optimized for all devices, providing seamless functionality.
            </p>
            <a href="https://github.com/nitheeshniranjan/Kingsukh-Guest-House">
              <FaGithub style={{ fontSize: '28px' }} />
            </a>
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: "100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="project"
        >
          <img className="profile2" src={profile2} alt="Amazon Clone" />
          <div className="content">
            <p>
             
              Cloning Amazon with React and Spring Boot involves building a React frontend for browsing, cart management, and authentication. Spring Boot handles backend tasks like user authentication (JWT), product management, and orders via REST APIs. Redux or Context API manages state, while MySQL stores data. Axios handles API calls, making the project full-stack, scalable, and responsive.
            
            </p>
           
            <a href="https://github.com/nitheeshniranjan/Kingsukh-Guest-House">
              <FaGithub style={{ fontSize: '28px' }} />
            </a>
          </div>
          <div className="icon">
           
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Work;
