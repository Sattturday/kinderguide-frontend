import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Stars } from '../../Stars';
import { LikeButton } from '../../LikeButton/LikeButton';
import './Card.scss';
import img from '../../../images/NewsCard/img5.png';

export const Card = ({ cardData, selected }) => {
  const [isLiked, setIsLiked] = useState(false);
  const image = cardData.album.length > 0 ? cardData.album[0].image : img;
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='card'>
      <img className='card__img' src={image} alt='Фото школы или сада' />
      <div className='card__container'>
        <div className='card__title-block'>
          <Link to={`/${selected}/${cardData.id}`} className='card__title'>
            {cardData.name}
          </Link>
          <LikeButton isLiked={isLiked} onLike={handleLike} />
        </div>

        <p className='card__text'>{cardData.description}</p>

        <div className='card__price-block'>
          <p className='card__price'>{`от ${cardData.price} ₽/мес.`}</p>
          <Stars rating={cardData.rating} />
        </div>
      </div>
    </div>
  );
};
