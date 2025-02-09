import React from 'react';
import './Contacts.css';
import theme_pattern from  '../../assets/theme_pattern.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import {motion} from 'framer-motion';

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9e3a22d8-4aa6-47bc-9e4b-5dc0d6fc013e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div  id='contact' className='contact'>
      <div className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contain-section">
            <motion.div
            initial={{opacity:0,translateX:"-100%"}}
            whileInView={{opacity:1,translateX:0}}
            transition={{duration:2}}
             className="contain-left">
                <h1>Lets Talk</h1>
                <p>Im currently available to take on new projects,</p>
                <div className="contain-details">
                   <div className="contact-detail">
                     <img src={mail_icon} alt="Email Icon" />
                     <p>mnitheesh850@gmail.com</p>
                   </div>
                   <div className="contact-detail">
                     <img src={call_icon} alt="Call Icon" />
                     <p>+91 8106809878</p>
                   </div>
                   <div className="contact-detail">
                     <img src={location_icon} alt="Location Icon" />
                     <p>Mudivarthipalem(v), Nellore(d), Andhra Pradesh</p>
                   </div>
                 </div>
      
            </motion.div>
                  <motion.form
                  initial={{opacity:0,translateX:"100%"}}
                  whileInView={{opacity:1,translateX:0}}
                  transition={{duration:2}}
                  
                  onSubmit={onSubmit} className="contact-right">
                <label htmlFor> Your Name</label>
                <input type="text" placeholder="Enter your name" name="name" />
                <label htmlFor> Your Email</label>
                <input type="email" placeholder="Enter your email" name="email" />
                <label htmlFor> Your Message</label>
                <textarea name="message" placeholder="Enter your name"  rows="8" />
                <button type="submit" className="contact-submit">Submit Now</button>
            </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
