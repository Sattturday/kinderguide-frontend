import { Button } from '../../../../components/common/Button';
import './NewsCard.scss';

export const NewsCard = () => {
  const dataCard = {
    date: '23 сентября 2023',
    title: 'Как выбирать школу  по  гуманитарным направлениям',
    description:
      'Если в скором времени ваш ребенок пойдет в 1ый класс, стоит заранее определиться в какой школе он будет учится. В этой статье мы расскажем, на что обратить внимание при поиске школыю',
  };

  return (
    <li className='news-card'>
      <Button width='95px'>Статья</Button>
      <img className='news-card__image' src='#' alt='тут будет картинка' />
      <div className='news-card__info'>
        <p className='news-card__date'>{dataCard.date}</p>
        <h3 className='news-card__title'>{dataCard.title}</h3>
        <p className='news-card__description'>{dataCard.description}</p>
      </div>
    </li>
  );
};
