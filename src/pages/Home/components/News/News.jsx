import React from 'react';

import { NewsData } from '../../../../utils/exampleData';
import { Button } from '../../../../components/common/Button/Button';
import { NewsCard } from '../NewsCard';

import star from '../../../../images/ServiceWork/decoration3.svg';
import wave from '../../../../images/News/wave.svg';

import './News.scss';

export function News() {
  const [countCardNews, setCountCardNews] = React.useState(5);
  const [countMoreNews, setCountMoreNews] = React.useState(5);

  function addMoreMovies() {
    setCountCardNews(countCardNews + countMoreNews);
  }
  return (
    <section className='news'>
      <div className='wrapper'>
        <div className='news__container'>
          <h2 className='news__title'>Новости</h2>
          <ul className='news__list'>
            {NewsData?.slice(0, countCardNews).map((dataCard, index) => (
              <NewsCard key={dataCard.id} dataCard={dataCard} />
            ))}
          </ul>
        </div>
        {NewsData.length > countCardNews ? (
          <div className='news__container-for-button'>
            <Button
              variant='square'
              color='blue-empty'
              size='small'
              type='button'
              children='Показать еще'
              width='298px'
              onClick={addMoreMovies}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <img
        className='news__img-wave'
        src={wave}
        alt='декоративная картинка волны'
      />
      <img
        className='news__img-star'
        src={star}
        alt='декоративная картинка звездочка'
      />
    </section>
  );
}
