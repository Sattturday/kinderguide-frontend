import React, { useState } from 'react';
import './NavigationProfile.scss';
import { NavigationFavorites } from '../NavigationFavorites/NavigationFavorites';
import { Popup } from '../../../../components/common/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { openExitProfileModal } from '../../../../store/modalsSlice';

export function NavigationProfile({ setStateProfile, stateProfile }) {
  const [isOpenFavorites, setIsOpenFavorites] = useState(false);

  const dispatch = useDispatch();
  const handleClick = (data) => {
    setStateProfile(data);
  };
  const arrowImgClass = isOpenFavorites ? 'favoritesOpen' : '';

  const handleClickFavorites = () => {
    setIsOpenFavorites(!isOpenFavorites);
  };

  return (
    <nav className='navigation-profile'>
      <button
        className={
          stateProfile === 'profile'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('profile')}
      >
        Профиль
      </button>
      <button
        className={
          stateProfile === 'schedule'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('schedule')}
      >
        Расписание
      </button>
      <button
        className={`navigation-profile__item navigation-profile__item_favorites ${arrowImgClass}`}
        onClick={() => handleClickFavorites()}
      >
        Избранное
      </button>
      {isOpenFavorites ? (
        <NavigationFavorites
          setStateProfile={setStateProfile}
          stateProfile={stateProfile}
        />
      ) : (
        ''
      )}
      <button
        className={
          stateProfile === 'exit'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => dispatch(openExitProfileModal())}
      >
        Выйти
      </button>
    </nav>
  );
}
