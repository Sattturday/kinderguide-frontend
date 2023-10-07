import './Promo.scss';
import { Button } from '../../../../components/common/Button';

export function Promo() {
  return (
    <section className='promo'>
      <div className='wrapper'>
        <div className='promo__description-area'>
          <h2>
            Помогаем найти лучший образовательный центр для вашего ребёнка.
          </h2>
          <Button />
        </div>
      </div>
    </section>
  );
}
