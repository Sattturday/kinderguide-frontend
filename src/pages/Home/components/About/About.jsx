import './About.scss';
export function About() {
  return (
    <section className='about' aria-label='Почему выбирают нас'>
      <div className='wrapper'>
        <div className='about__wrapper'>
          <div className='about__containerOne'>
            <h2 className='about__header'>Почему выбирают нас?</h2>
          </div>
          <div className='about__containerTwo'>
            <div className='two'>
              <div className='about__infoWrapperTwo'>
                <h3 className='about__title'>Информированный выбор</h3>
                <p className='about__text'>
                  Пользователи получают доступ к подробной информации о детских
                  школах и садах, включая отзывы и рейтинги от других родителей.
                </p>
              </div>
            </div>
          </div>
          <div className='about__containerThree'>
            <div className='about__infoWrapperThree'>
              <h3 className='about__title'>Удобство и доступность</h3>
              <p className='about__text'>
                Сервис доступен 24/7 через интернет, что позволяет родителям
                и опекунам искать и бронировать места в детских учреждениях
                в любое удобное для них время и место.
              </p>
            </div>
          </div>
          <div className='about__containerFour'>
            <div className='about__infoWrapperFour'>
              <h3 className='about__title'>Экономия вашего времени</h3>
              <p className='about__text'>
                Родители и опекуны могут быстро и легко находить подходящие
                детские учреждения, ознакомиться с информацией и бронировать
                места, всё это в одном месте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
