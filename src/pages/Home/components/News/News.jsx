import React from 'react';
import { NewsData } from '../../../../utils/exampleData';
import { NewsCard } from '../NewsCard';
import './News.scss';
import { Button } from '../../../../components/common/Button/Button';

export function News() {
  const [countCardNews, setCountCardNews] = React.useState(6);
  const [countMoreNews, setCountMoreNews] = React.useState(6);

  function addMoreMovies() {
    setCountCardNews(countCardNews + countMoreNews);
  }
  return (
    <section className='news'>
      <div className='wrapper'>
        <div className='news__container'>
          <h2 className='news__title'>Новости</h2>
          <ul className='news__list'>
            {NewsData?.slice(0, countCardNews).map((dataCard) => (
              <NewsCard key={dataCard.id} dataCard={dataCard} />
            ))}
          </ul>
        </div>
        {NewsData.length > 6 ? (
          <div className='news__container-for-button'>
            <Button
              children='Показать еще'
              width='408px'
              onClick={addMoreMovies}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
