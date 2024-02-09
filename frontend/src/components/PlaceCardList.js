import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './place-card';

const PlaceCardList = ({ cardData }) => {
  if (cardData.length === 0) {
    // Render skeleton loading cards
    return (
      <>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      </>
    );
  } else {
    return (
      <>
        {cardData.map((card, index) => (
          <PlaceCard
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            price={card.price}
            description={card.description}
            href={card.href}
          />
        ))}
      </>
    );
  }
};

export default PlaceCardList;
