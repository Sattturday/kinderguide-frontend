import { Button } from '../../../../components/common/Button';
import { NewsData } from '../../../../utils/exampleData';
import { NewsCard } from '../NewsCard';
import './News.scss';

export function News() {
  return (
    <section className='news' aria-label='Ресурсы'>
      <div className='wrapper'>
        <div className='news__container'>
          <h2 className='news__title'>Новости</h2>
          <ul className='news__list'>
            {NewsData?.map((dataCard) => (
              <NewsCard key={dataCard.id} dataCard={dataCard} />
            ))}
          </ul>
          <Button color='blue-empty' width='188px' size='small'>
            Показать все
          </Button>
        </div>
      </div>
    </section>
  );
}
