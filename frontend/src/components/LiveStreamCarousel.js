import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
           <div key={index} className="carousel-item" onClick={() => window.open(`${item.href}`, '_blank')}>
          <div 
          data-key="livestream1" 
          style={{
            backgroundSize: 'cover', 
            backgroundColor: 'rgb(0, 0, 0)', 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), transparent 50%), url(\'${item.image}')`,
            backgroundPosition: 'center center',
            minWidth: '190px',
            width: '190px',
            minHeight: '264px',
            height: '264px',
            borderRadius: '10px',
            boxShadow: 'gray 1px 1px 10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '36px',
            marginLeft: '0px',
            marginBottom: '16px',
            color: 'rgb(255, 255, 255)',
            textShadow: 'rgb(0, 0, 0) 2px 2px 10px',
            cursor: 'pointer',
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '12px', position: 'inherit', zIndex: '1'}}>
            <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '40px', padding: '4px 6px', textShadow: 'none'}}>
              <div style={{color: 'rgb(0, 0, 0)'}}>{item.time}</div>
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
