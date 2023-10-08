import { Button } from '../../../../components/common/Button';
import arrow from '../../../../images/NewsCard/Arrow.svg';
import { NewsCard } from '../NewsCard';
import './Resources.scss';

export function Resources() {
  return (
    <section className='recurses' aria-label='Ресурсы'>
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
