import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const defaultStreamData = {
    description: "No Upcoming Streams Found. Tap to find out more.",
    href: "https://www.whatnot.com/user/hypernovasports",
    image: "hypernova_img.png",
    time: "?????"
  };

  items = (items == undefined || items == null) ? [] : items;
  // set default data if no data is passed in
  items = (items && items.length === 0) ? [defaultStreamData] : items;
  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
           <div key={index} className="carousel-item" onClick={() => window.open(`${item.href}`, '_blank')}>
          <div className='live-stream-item'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), transparent 50%), url(\'${item.image}')`
          }}
        >
          <div className='item-info-container'>
            <div className='time-container'>
              <div>{item.time}</div>
              </div>
            </div>
            <div className='show-description-text-container'>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Carousel;
