import React from 'react';

import { NewsData } from '../../../../utils/exampleData';
import { NewsCard } from '../NewsCard';

import star from '../../../../images/ServiceWork/decoration3.svg';
import wave from '../../../../images/News/wave.svg';

import './News.scss';
import { AddMoreButton } from '../../../../components/AddMoreButton';

export function News() {
  const [displayedCards, setDisplayedCards] = React.useState(5);

  return (
    <section className='news'>
      <div className='wrapper'>
        <div className='news__container'>
          <h2 className='news__title'>Новости</h2>
          <ul className='news__list'>
            {NewsData?.slice(0, displayedCards).map((dataCard, index) => (
              <NewsCard key={dataCard.id} dataCard={dataCard} />
            ))}
          </ul>
        </div>
        <div className='news__container-for-button'>
          <AddMoreButton
            cards={NewsData}
            count={5}
            displayedCards={displayedCards}
            setDisplayedCards={setDisplayedCards}
          />
        </div>
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
