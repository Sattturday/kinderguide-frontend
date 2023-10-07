import { Button } from '../../../../components/common/Button';
import { NewsCard } from '../NewsCard';
import './Recurses.scss';
import arrow from '../../../../images/NewsCard/Arrow.svg';

export function Recurses() {
  return (
    <section className='recurses'>
      <div className='wrapper'>
        <div className='recurses__container'>
          <ul className='recurses__list'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </ul>
          <Button variant='link'>
            <img
              className='recurses__button-img'
              src={arrow}
              alt='Кнопка, ведущая на страницу Ресурсы'
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
