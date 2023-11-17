import { useNavigate } from 'react-router-dom';

import img from '../../../images/NewsCard/img5.png';
import { Stars } from '../../Stars';
import { LikeButton } from '../../LikeButton/LikeButton';
import useFavorite from '../../../hooks/useFavorite';

import './Card.scss';

export const Card = ({ cardData }) => {
  const image = cardData.album.length > 0 ? cardData.album[0].image : img;
  const navigate = useNavigate();

  const { isLiked, handleLike } = useFavorite(cardData);

  const handleClick = () => {
    navigate(`/${cardData.type}s/${cardData.id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
      <img className='card__img' src={image} alt='Фото школы или сада' />
      <div className='card__container'>
        <div className='card__title-block'>
          <h3 className='card__title'>{cardData.name}</h3>
          <LikeButton isLiked={isLiked} onLike={handleLike} />
        </div>

        <p className='card__text'>{cardData.description}</p>

        <div className='card__price-block'>
          <p className='card__price'>{`от ${cardData.price} ₽/мес.`}</p>
          <Stars rating={cardData.rating}>
            <p className='card__reviews'>{cardData.reviews || 0}</p>
          </Stars>
        </div>
      </div>
    </div>
  );
};
