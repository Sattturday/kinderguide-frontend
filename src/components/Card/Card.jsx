import './Card.scss';

export const Card = () => (
  <div className='card'>
    <img className='card__img' src='#' alt='Фото школы' />
    <div className='card__container'>
      <div className='card__title-block'>
        <h2 className='card__title'>Название школы</h2>
        <div className='card__rating-block'>
          <div className='card__star' />
          <p className='card__counting'>(1)</p>
        </div>
      </div>
      <p className='card__text'>
        Краткая информация о школе Краткая информация о школеКраткая информация
        о школеКраткая информация о школеКраткая информация о школе
      </p>
      <div className='card__price-block'>
        <p className='card__price'>
          от <span className='card__number'>1000</span> &#8381;/мес
        </p>
        <div className='card__like-block'>
          <button className='card__like-btn' aria-label='Поставить лайк' />
        </div>
      </div>
    </div>
  </div>
);
