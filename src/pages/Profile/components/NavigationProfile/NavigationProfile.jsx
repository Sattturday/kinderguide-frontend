import React, { useState } from 'react';
import './NavigationProfile.scss';
import { NavigationFavorites } from '../NavigationFavorites/NavigationFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { openExitProfileModal } from '../../../../store/modalsSlice';

export function NavigationProfile({ setStateProfile, stateProfile }) {
  const dispatch = useDispatch();
  const [isOpenFavorites, setIsOpenFavorites] = useState(false);
  const isOpen = useSelector((state) => state.modals.isOpenExitProfileModal);

  const arrowImgClass = isOpenFavorites ? 'favoritesOpen' : '';

  const handleClick = (data) => {
    setStateProfile(data);
  };

  const handleClickFavorites = () => {
    setIsOpenFavorites(!isOpenFavorites);
  };

  const handleClickExit = () => {
    dispatch(openExitProfileModal());
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
      {/* <button
        className={
          stateProfile === 'schedule'
            ? 'navigation-profile__item navigation-profile__item_active'
            : 'navigation-profile__item'
        }
        onClick={() => handleClick('schedule')}
      >
        Расписание
      </button> */}
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
        className={'navigation-profile__item'}
        onClick={() => handleClickExit()}
      >
        Выйти
      </button>
    </nav>
  );
}
