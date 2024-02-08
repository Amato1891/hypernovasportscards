import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './place-card';

const PlaceCardList = ({ cardData }) => {
  return (<>
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
};

PlaceCardList.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PlaceCardList;
