import './Promo.scss';
import { Button } from '../../../../components/common/Button';
import Union1 from '../../../../images/Promo/Union1.svg';
import Union2 from '../../../../images/Promo/Union2.svg';
import Union3 from '../../../../images/Promo/Union3.svg';
import arrow from '../../../../images/Promo/Arrow.svg';

export function Promo() {
  return (
    <section className='promo'>
      <div className='promo__description-area'>
        <h2 className='promo__title'>
          Помогаем найти лучший образовательный центр для вашего ребёнка.
        </h2>
        <Button width='408px' size='large'>
          Перейти в каталог
        </Button>
      </div>
      <div className='promo__image-container'>
        <img
          className='promo__image promo__image_top-left'
          src={Union1}
          alt='фотография ребенка'
        />
        <img
          className='promo__image promo__image_top-right'
          src={Union2}
          alt='показывают большой палец вверх'
        />
        <img
          className='promo__image promo__image_bottom'
          src={Union3}
          alt='дети смотрят глобус'
        />
        <img
          className='promo__image promo__image_arrow'
          src={arrow}
          alt='пунктирная стрелка'
        />
      </div>
    </section>
  );
}
