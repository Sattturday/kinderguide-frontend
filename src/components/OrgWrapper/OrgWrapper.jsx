import './OrgWrapper.scss';
import { Button } from '../common/Button';
import like from '../../images/OrgWrapper/heart.svg';
import { Stars } from '../Stars';
import { YandexMap } from './YandexMap';
import { Feedback } from './Feedback';

export const OrgWrapper = ({
  org,
  children,
  name,
  description,
  telephone,
  address,
  email,
  album,
  price,
  // rating,
}) => {
  // Ю. Убрать хардкод, когда прийдут данные
  const rating = 4.5;
  return (
    <div className='orgWrapper'>
      <nav className='orgWrapper__nav'>
        <Button variant='link' type='button'>
          Образование /
        </Button>
        <Button variant='link' type='button'>
          {org}
        </Button>
      </nav>
      <div className='orgWrapper__headerWrapper'>
        <div>
          <h1 className='orgWrapper__header'>{name}Test</h1>
          <div className='orgWrapper__ratingWrapper'>
            <Stars rating={rating}></Stars>
          </div>
        </div>
        <Button variant='link' type='button'>
          <img
            className='orgWrapper__like'
            src={like}
            alt='добавить в избранное'
          />
        </Button>
      </div>
      <div className='orgWrapper__content'>
        <section className='orgWrapper__info' aria-label='Карточка организации'>
          <div className='orgWrapper__imgContainer'>{/* //Слайдер */}</div>
          <div className='orgWrapper__description'>
            <h2 className='orgWrapper__descHeader'>Описание</h2>
            <p className='orgWrapper__descText'>
              {description}Brookes School Moscow- международная частная IB
              школа, расположенная в Москве в районе Ботанического сада города
              Москвы. Является частью сети Brookes Education Group, имеющей
              отделения по всему миру и ставящей своей целью создание уникальной
              атмосферы для успешного развития потенциала каждого ученика.
              Учебные программы предназначены для детей{' '}
            </p>
            <Button variant='link' type='button'>
              Подробнее>
            </Button>
            {children}
          </div>
        </section>
        <aside className='orgWrapper__aside'>
          <div className='orgWrapper__contactInfo'>
            <p className='orgWrapper__title'>Стоимость обучения</p>
            <p className='orgWrapper__perYear'>{price} в год</p>
            <p className='orgWrapper__perMonth'>{price / 12} в месяц</p>
            <p className='orgWrapper__title'>Контакты</p>
            <p className='orgWrapper__contacts'>Телефон: {telephone}</p>
            <p className='orgWrapper__contacts'>Почта: {email}</p>
            <p className='orgWrapper__contacts'>Адрес {address}</p>
            <Button variant='primary' type='submit'>
              Подать заявление
            </Button>
          </div>
          <div className='orgWrapper__map'>
            <YandexMap />
          </div>
        </aside>
      </div>
      <section className='orgWrapper__feedback' aria-label='Отзывы'>
        <h2 className='orgWrapper__feedbackHeader'>Отзывы</h2>
        <div className='orgWrapper__feedbackCards'>
          {/* //Слайдер с отзывами */}
          <Feedback />
        </div>
      </section>
    </div>
  );
};
