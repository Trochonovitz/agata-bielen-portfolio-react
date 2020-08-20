import React from 'react';

import {
  wrapper,
  info,
  collection,
  arrow,
  collectionName,
  cardImage,
} from './Card.module.scss';

const Card = ({ name, collectionNumber }) => (
  <div className={wrapper}>
    <div className={info}>
      <p className={collection}>Coll no. {collectionNumber}</p>

      <p className={collectionName}>{name} Line</p>

      <span className={arrow}>→</span>
    </div>
    <img
      className={cardImage}
      src={`img/img${collectionNumber}.png`}
      alt={`Collection ${name} - number ${collectionNumber}`}
    />
  </div>
);

export default Card;
