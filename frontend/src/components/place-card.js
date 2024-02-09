import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className="place-card-container">
      {props.image ? (
        <img src={props.image} alt={props.imageAlt} className="place-card-image" />
      ) : (
        <div className="place-card-image skeleton-loading"></div>
      )}
      {props.description ? (
        <>
        <div className="place-card-container1 ">
        <span className="place-card-text">{props.price}</span>
        <span className="place-card-text1">{props.description}</span>
        <OutlineButton button1="See it on" href= {props.href}></OutlineButton>
        </div>
        </>
      ) : (
        <div className="place-card-container1-skeleton-loading">
        <div className="skeleton-loading-line"></div>
        <div className="skeleton-loading-line"></div>
        <div className="skeleton-loading-line"></div>
        </div>
      )}
        
    </div>
  )
}

PlaceCard.defaultProps = {
  price: '',
  description:
    '',
  href: 'https://www.google.com'
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
}

export default PlaceCard
