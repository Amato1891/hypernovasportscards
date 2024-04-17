import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className="place-card-container" onClick={() => handleClick(props.href)}>
      {props.image ? (
        <img src={props.image} alt={props.imageAlt} className="place-card-image" />
      ) : (
        <div className="place-card-image skeleton-loading"></div>
      )}
      {props.description ? (
        <>
        <div className="place-card-container1 ">
        <div className="place-card-text"><div className="place-card-price"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 -10 120 60">
  <path d="M71.474 30.746c-3.794.124-6.165.804-6.165 3.32 0 1.63 1.3 3.382 4.578 3.382 4.392 0 6.743-2.392 6.743-6.33v-.433l-5.155.062zm9.362 5.196l.144 3.505h-3.897c-.103-.887-.144-1.773-.144-2.64-2.103 2.598-4.62 3.34-8.104 3.34-5.155 0-7.918-2.722-7.918-5.877 0-4.578 3.753-6.186 10.3-6.33C73 27.9 75 27.9 76.65 27.9v-.454c0-3.052-1.96-4.3-5.36-4.3-2.516 0-4.392 1.052-4.578 2.846H62.3c.474-4.495 5.196-5.63 9.34-5.63 5 0 9.176 1.773 9.176 7.032v8.557z" fill="#f5af02"/>
  <path d="M35.203 28.52c-.165-3.918-3-5.382-6.02-5.382-3.258 0-5.877 1.65-6.33 5.382zM22.77 31.304c.227 3.815 2.846 6.062 6.454 6.062 2.495 0 4.722-1 5.464-3.237h4.33c-.845 4.495-5.63 6.02-9.733 6.02-7.485 0-10.784-4.124-10.784-9.67 0-6.124 3.423-10.145 10.867-10.145 5.918 0 10.248 3.093 10.248 9.857v1.114z" fill="#e53238"/>
  <path d="M50.36 37.283c3.897 0 6.557-2.804 6.557-7.032s-2.66-7.032-6.557-7.032c-3.877 0-6.557 2.804-6.557 7.032s2.68 7.032 6.557 7.032zM39.615 12.97H43.8v10.537c2.062-2.454 4.887-3.155 7.67-3.155 4.68 0 9.857 3.155 9.857 9.96 0 5.7-4.124 9.857-9.94 9.857-3.052 0-5.897-1.093-7.67-3.258 0 .866-.04 1.732-.144 2.557H39.45l.144-4.33V12.97z" fill="#0064d2"/>
  <path d="M102.178 21.034L89.207 46.5h-4.7l3.732-7.073-9.753-18.393h4.908l7.176 14.372 7.155-14.372z" fill="#86b817"/>
</svg>{props.price}</div></div>
        <span className="place-card-text1">{props.description}</span>
        {/* <OutlineButton button1="See it on" href= {props.href}></OutlineButton> */}
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

const handleClick = (href) => {
  window.open(href, '_blank');
};

export default PlaceCard
