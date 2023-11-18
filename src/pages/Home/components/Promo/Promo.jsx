import { Link } from 'react-router-dom';

import { Button } from '../../../../components/common/Button';
import star from './images/star.svg';
import glass from './images/glass.svg';
import question from './images/question.svg';
import dots from './images/dots.svg';
import snake from './images/snake.svg';
import girl from './images/girl.svg';

import './Promo.scss';

export function Promo() {
  return (
    <section className='promo'>
      {/* <img src={girl} /> */}
      <div className='wrapper'>
        <div className='promo__description-area'>
          <h2 className='promo__title'>
            Помогаем найти лучший образовательный центр для вашего ребёнка
          </h2>

          <Button width='408px' size='large'>
            <Link to='catalog'>Перейти в каталог</Link>
          </Button>
        </div>
        <div className='promo__image-container'>
          <img src={star} alt='Какой детский сад лучше?' />
          <img src={glass} alt='Как найти хорошую школу?' />
          <img src={question} alt='Вопросительный знак' />
          <img src={snake} alt='Декоративная линия' />
          <img src={dots} alt='Декоративные точки' />
          <img src={girl} alt='Девушка' />
          <span>Как найти хорошую школу?</span>
          <span>Какой детский сад лучше?</span>
        </div>
      </div>
    </section>
  );
}
