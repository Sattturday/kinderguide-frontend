import './OrgWrapper.scss';
import { Button } from '../common/Button';

export const OrgWrapper = ({ org, children, title }) => {
  //Ю. Отзывы, округлить вниз - закрашенные, смапить
  //Ю. Если у отзывов есть десятичные - половинчатая звезда
  //Ю. 5 - отзывы окр вниз - пустые, смапить
  //Ю. Прописать "орг" в зависимости от роута

  return (
    <>
      <nav className='orgWrapper__nav'>Образование / {org}</nav>
      <div className='orgWrapper__headerWrapper'>
        <div>
          <h1 className='orgWrapper__header'>{title}test</h1>
          <div className='orgWrapper__ratingWrapper'>
            <div className='orgWrapper__Stars'>
              <img className='orgWrapper__star' src='' alt='' />
              <img className='orgWrapper__star' src='' alt='' />
              <img className='orgWrapper__star' src='' alt='' />
              <img className='orgWrapper__star' src='' alt='' />
              <img className='orgWrapper__star' src='' alt='' />
            </div>
          </div>
          <Button variant='link' type='button'></Button>
        </div>
      </div>
      <section className='orgWrapper__info' aria-label='Карточка организации'>
        <div className='orgWrapper__imgContainer'>{/* //Слайдер */}</div>
        <div className='orgWrapper__description'>
          <h2 className='orgWrapper__header'>Описание</h2>
          <p className='orgWrapper__text'></p>
          <Button variant='link' type='button'>
            Подробнее>
          </Button>
          {children}
        </div>
        <aside className='orgWrapper__aside'>
          <div className='orgWrapper__contactInfo'>
            <p className='orgWrapper__title'>Стоимость обучения</p>
            <p className='orgWrapper__perYear'>в год</p>
            <p className='orgWrapper__perYear'>в месяц</p>
            <p className='orgWrapper__title'>Контакты</p>
            <p className='orgWrapper__contacts'>Телефон:</p>
            <p className='orgWrapper__contacts'>Почта:</p>
            <p className='orgWrapper__contacts'>Адрес</p>
            <Button variant='primary' type='submit'>
              Подать заявление
            </Button>
          </div>
          <div className='orgWrapper__map'></div>
        </aside>
      </section>
      <section className='orgWrapper__feedback' aria-label='Отзывы'>
        <h2 className='orgWrapper__feedbackHeader'>Отзывы</h2>
        {/* //Слайдер с отзывами */}
      </section>
    </>
  );
};
