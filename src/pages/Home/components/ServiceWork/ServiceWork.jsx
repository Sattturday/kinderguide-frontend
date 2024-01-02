// import { ServiceWorkCard } from '../ServiceWorkCard';
import './ServiceWork.scss';

import team from '../../../../images/ServiceWork/Rectangle 358.svg';
import orangewave from '../../../../images/ServiceWork/Linked Path Group.svg';
import plus from '../../../../images/ServiceWork/decoration2.svg';

export function ServiceWork() {
  // const cards = [
  //   {
  //     id: '1',
  //     title: 'Выбирайте школу или детский сад',
  //     description:
  //       'Используя фильтры, выберите лучшую школу или детский сад, для своего ребенка.',
  //   },
  //   {
  //     id: '2',
  //     title: 'Добавляйте найденные учебные заведения в избранное',
  //     description:
  //       'Теперь не нужно беспокоится, что вы потеряете контакт школ или детских садов, которые вам не подошли.',
  //   },
  //   {
  //     id: '3',
  //     title: 'Читайте и отзывы и рекомендации',
  //     description:
  //       'На нашем сайте отзывы реальных людей, которые помогут вам определится с выбором, образовательного заведения.',
  //   },
  // ];

  return (
    <section className='service-work'>
      <div className='wrapper'>
        <h2 className='service-work__title'>
          Как работает сервис KinderGuide?
        </h2>
        <p className='service-work__subtitle'>
          Упрости себе жизнь, используя наш полезный сервис
        </p>
        <div div className='service-work__wrapper'>
          <img
            className='service-work__img-team'
            src={team}
            alt='фотография людей, смотрящих на монитор'
          />
          <ul className='service-work__list'>
            <li className='service-work-card'>
              <h3 className='service-work-card__header'>
                Выбирайте школу или детский сад
              </h3>
              <p className='service-work-card__description'>
                Используя фильтры, выберите лучшую школу или детский сад, для
                своего ребенка
              </p>
            </li>
            <li className='service-work-card'>
              <h3 className='service-work-card__header'>
                Читайте и отзывы и рекомендации
              </h3>
              <p className='service-work-card__description'>
                На нашем сайте отзывы реальных людей, которые помогут вам
                определится с выбором, образовательного заведения.
              </p>
            </li>
          </ul>
          <ul className='service-work__list-two'>
            <li className='service-work__card'>
              <h3 className='service-work-card__header'>
                Добавляйте найденные учебные заведения в избранное
              </h3>
              <p className='service-work-card__description'>
                Теперь не нужно беспокоится, что вы потеряете контакт школ или
                детских садов, которые вам не подошли.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <img
        className='service-work__img-wave'
        src={orangewave}
        alt='Декоративная картинка'
      />
      <div className='service-work__img-wrapper'>
        <img
          className='service-work__img-plus'
          src={plus}
          alt='Декоративная картинка'
        />
      </div>
    </section>
  );
}
