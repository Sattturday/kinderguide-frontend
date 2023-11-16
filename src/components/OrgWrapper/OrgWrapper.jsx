import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import YandexShare from 'react-yandex-share';

import { Button } from '../common/Button';
import { Stars } from '../Stars';
import { LikeButton } from '../LikeButton';
import { Reviews } from '../Reviews';

import { ImageSlider } from './ImageSlider';
import { Feedback } from './Feedback';
import { Activity } from './Activity';
import { YandexMap } from './YandexMap';
import './OrgWrapper.scss';

export const OrgWrapper = ({ data, feedback, org, activities }) => {
  return (
    <div className='orgWrapper'>
      <nav className='orgWrapper__nav'>
        <Link to='/catalog' className='orgWrapper__nav-item'>
          Образование
        </Link>
        <p className='orgWrapper__nav-item'>&nbsp;/&nbsp;</p>
        <Link to='/catalog' className='orgWrapper__nav-item'>
          {org}
        </Link>
      </nav>
      <div className='orgWrapper__headerWrapper'>
        <h1 className='orgWrapper__header'>{data.name}</h1>
        <div className='orgWrapper__favourite'>
          <YandexShare
            content={{ title: 'My page' }}
            theme={{
              lang: 'en',
              services: 'vkontakte,telegram,whatsapp',
              colorScheme: 'whiteblack',
              curtain: 'true',
              limit: '0',
              moreButtonType: 'short',
              copy: 'hidden',
            }}
          />
          <LikeButton />
        </div>
      </div>
      <HashLink
        className='orgWrapper__ratingWrapper'
        to='#orgWrapper__feedback'
      >
        <Stars rating={data.rating} reviews={data.reviews}>
          {<Reviews reviews={data.reviews} />}
        </Stars>
      </HashLink>
      <div className='orgWrapper__content'>
        <section className='orgWrapper__info' aria-label='Карточка организации'>
          <div className='orgWrapper__imgContainer'>
            <ImageSlider images={data.album} width='738px' />
          </div>
          <div className='orgWrapper__section'>
            <h2 className='orgWrapper__sectionHeader'>Описание</h2>
            <p className='orgWrapper__descText'>{data.description}</p>
          </div>
          <div className='orgWrapper__section'>
            <h2 className='orgWrapper__sectionHeader'>Информация</h2>
            <div>
              {activities.map((activity) => (
                <Activity
                  key={`${org}+${activity.type}`}
                  text={activity.text}
                  type={activity.type}
                />
              ))}
            </div>
          </div>
        </section>
        <aside className='orgWrapper__aside'>
          <div className='orgWrapper__contactInfo'>
            <p className='orgWrapper__title'>Стоимость обучения</p>
            <p className='orgWrapper__perYear'>
              {data.price_of_year} &#8381; в год
            </p>
            <p className='orgWrapper__perMonth'>{data.price} &#8381; в месяц</p>
            <p className='orgWrapper__title'>Контакты</p>
            <p className='orgWrapper__contacts'>
              Сайт:{' '}
              <a href={data.website} target='_blank' rel='noopener noreferrer'>
                {data.website}
              </a>
            </p>
            <p className='orgWrapper__contacts'>
              Телефон: <a href={`tel:${data.telephone}`}>{data.telephone}</a>
            </p>
            <p className='orgWrapper__contacts'>
              Почта: <a href='mailto:school35@ya.ru'>{data.email}</a>
            </p>
            <p className='orgWrapper__contacts'>Адрес: {data.address}</p>
            <div className='orgWrapper__buttonWrapper'>
              <Button
                className='orgWrapper__button'
                variant='primary'
                type='submit'
                size='large'
                width='408px'
              >
                Подать заявление
              </Button>
            </div>
          </div>
          <div className='orgWrapper__map'>
            <YandexMap coordinates={data.coordinates} />
          </div>
        </aside>
      </div>
      <section
        id='orgWrapper__feedback'
        className='orgWrapper__feedback'
        aria-label='Отзывы'
      >
        <h2 className='orgWrapper__sectionHeader'>Отзывы</h2>
        <Feedback feedback={feedback} org={org} />
      </section>
    </div>
  );
};
