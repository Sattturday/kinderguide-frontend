import { useState } from 'react';
import './Card.scss';

export const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const cardLikeToggleClass = isLiked ? 'card__like-btn_active' : '';
  // Добавление лайка
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='card'>
      <img
        className='card__img'
        src='https://via.placeholder.com/217x197/'
        alt='Фото школы'
      />
      <div className='card__container'>
        <div className='card__title-block'>
          <h2 className='card__title'>Название школы</h2>
          <div className='card__rating-area'>
            <div className='card__star' />
            <p className='card__counting'>(1)</p>
          </div>
        </div>
        <p className='card__text'>
          Краткая информация о школе Краткая информация о школеКраткая
          информация о школеКраткая информация о школеКраткая информация о школе
        </p>
        <div className='card__price-block'>
          <p className='card__price'>
            от <span className='card__number'>1000</span> &#8381;/мес
          </p>
          <div className='card__like-block'>
            <button
              className={`card__like-btn ${cardLikeToggleClass}`}
              aria-label='Поставить лайк'
              onClick={handleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
