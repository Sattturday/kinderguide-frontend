import { NewsCard } from '../NewsCard';
import './News.scss';

export function News() {
  return (
    <ul className='news'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>
  );
}
