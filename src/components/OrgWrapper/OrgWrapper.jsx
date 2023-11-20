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
import useFavorite from '../../hooks/useFavorite';

export const OrgWrapper = ({ data, feedback, org, activities, type }) => {
  const { isLiked, handleLike } = useFavorite(data);

  return (
    <>
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
                size: 's',
              }}
            />
            <LikeButton isLiked={isLiked} onLike={handleLike} />
          </div>
        </div>
        <HashLink
          className='orgWrapper__ratingWrapper'
          to='#orgWrapper__feedback'
        >
          <span className='orgWrapper__rating'>{data.rating || 0}</span>
          <Stars rating={data.rating || 0} />
          <p className='orgWrapper__quantity'>
            {feedback.length === 0
              ? 'Отзывов пока нет'
              : feedback.length === 1
              ? '1 отзыв'
              : feedback.length < 5
              ? `${feedback.length} отзыва`
              : `${feedback.length} отзывов`}
          </p>
        </HashLink>
        <div className='orgWrapper__content'>
          <div className={`orgWrapper__grid orgWrapper__grid_type_${type}`}>
            <section
              className='orgWrapper__info orgWrapper__info_type_slider'
              aria-label='Фото организации'
            >
              <div className='orgWrapper__imgContainer'>
                <ImageSlider images={data.album} width='100%' />
              </div>
            </section>
            <section
              className='orgWrapper__info orgWrapper__info_type_text'
              aria-label='Информация об организации'
            >
              <div className='orgWrapper__section orgWrapper__section_kind_description'>
                <h2 className='orgWrapper__sectionHeader'>Описание</h2>
                <p className='orgWrapper__descText'>{data.description}</p>
              </div>
              <div className='orgWrapper__section orgWrapper__section_kind_activities'>
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
              {data?.preparing_for_school && (
                <div className='orgWrapper__section orgWrapper__section_kind_preparation'>
                  <p className='preparation'>
                    <span className='preparation__type'>
                      Подготовка к школе:
                    </span>{' '}
                    {data.preparing_for_school}
                  </p>
                </div>
              )}
            </section>
            <aside className='orgWrapper__aside'>
              <div className='orgWrapper__contactInfo'>
                <p className='orgWrapper__titlePrice'>Стоимость обучения</p>
                <p className='orgWrapper__perYear'>
                  {data.price_of_year || '-'} &#8381; в год
                </p>
                <p className='orgWrapper__perMonth'>
                  {data.price || '-'} &#8381; в месяц
                </p>
                <p className='orgWrapper__titleContacts'>Контакты</p>
                <p className='orgWrapper__contacts'>
                  Сайт:{' '}
                  <a
                    className='orgWrapper__contactContent'
                    href={data.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {data.website}
                  </a>
                </p>
                <p className='orgWrapper__contacts'>
                  Телефон:{' '}
                  <a
                    className='orgWrapper__contactContent'
                    href={`tel:${data.telephone}`}
                  >
                    {data.telephone}
                  </a>
                </p>
                <p className='orgWrapper__contacts'>
                  Почта:{' '}
                  <a
                    className='orgWrapper__contactContent'
                    href='mailto:school35@ya.ru'
                  >
                    {data.email}
                  </a>
                </p>
                <p className='orgWrapper__contacts'>
                  Адрес:{' '}
                  <span className='orgWrapper__contactContent'>
                    {' '}
                    {data.address}
                  </span>
                </p>
              </div>
              <div className='orgWrapper__map'>
                <YandexMap
                  coordinates={data.coordinates}
                  address={data.address}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
      <section
        id='orgWrapper__feedback'
        className='orgWrapper__feedback'
        aria-label='Отзывы'
      >
        <h2 className='orgWrapper__sectionHeader'>Отзывы</h2>
        <Feedback feedback={feedback} org={org} />
      </section>
    </>
  );
};
