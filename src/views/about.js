import React from 'react'
import { Helmet } from 'react-helmet'
import { InstagramEmbed } from 'react-social-media-embed';
import Navbar from '../components/Navbar';

import './about.css'

const About = (props) => {
  return (
<div className="about-container">
    <div className="about-us">
      <Helmet>
        <title>Hypernovasportscards - About Us</title>
      </Helmet>
      <Navbar/>
      <div className="background-image">
      
        <div className="background-overlay"></div>
        <h1 className="about-us-text">About Us</h1>
        <p className="about-us-text">
        As an avid seller across eBay, Whatnot, and Instagram, I prioritize customer satisfaction above all else, delivering top-notch service and quality products. Hosting live stream events on Whatnot weekly, I showcase exciting new inventory sourced from trade shows. Don't forget to check out my social media links for more updates and exclusive offers!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', minWidth:50}} className="instagram-profile-container">
            <InstagramEmbed url="https://www.instagram.com/hypernovasportscards/" width={'100%'} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
