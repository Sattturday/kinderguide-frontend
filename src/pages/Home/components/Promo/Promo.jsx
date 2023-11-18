import { Link } from 'react-router-dom';

import { Button } from '../../../../components/common/Button';

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
          <div className='promo__button promo__button_desktop'>
            <Button width='408px' size='large'>
              <Link to='catalog'>Перейти в каталог</Link>
            </Button>
          </div>
          <div className='promo__button promo__button_tablet'>
            <Button width='300px' size='large'>
              <Link to='catalog'>Перейти в каталог</Link>
            </Button>
          </div>
          <div className='promo__button promo__button_mobile'>
            <Button width='288px' size='large'>
              <Link to='catalog'>Перейти в каталог</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
