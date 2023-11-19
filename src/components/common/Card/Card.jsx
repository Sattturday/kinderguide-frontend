import { useNavigate } from 'react-router-dom';

import img from '../../../images/NewsCard/img5.png';
import star from '../../../images/Stars/Star-filled.svg';
import useFavorite from '../../../hooks/useFavorite';
import { getName } from '../../../utils/utils';
import { LikeButton } from '../../LikeButton/LikeButton';
import { Stars } from '../../Stars';

import './Card.scss';

const reviewName = ['отзыв', 'отзыва', 'отзывов'];

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
            <p className='card__reviews'>&nbsp;{cardData.reviews || 0}</p>
          </Stars>
        </div>

        <div className='card__price-block-s'>
          <p className='card__price'>{`от ${cardData.price} ₽/мес.`}</p>
          <div className='card__reviews-s'>
            <p>{cardData.rating || 0}&nbsp;</p>
            <img src={star} alt='star' />
            <span>
              &nbsp;&nbsp;{cardData.reviews || 0}&nbsp;
              {getName(cardData.reviews, reviewName)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
