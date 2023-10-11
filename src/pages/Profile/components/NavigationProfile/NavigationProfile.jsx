import React from 'react';
import './NavigationProfile.scss';
import { NavLink } from 'react-router-dom';

export function NavigationProfile() {
  return (
    <nav className='navigation-profile'>
      <NavLink
        className={({ isActive }) =>
          `navigation-profile__item ${
            isActive ? 'navigation-profile__item_active' : ''
          }`
        }
        to='/profile'
      >
        Профиль
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `navigation-profile__item ${
            isActive ? 'navigation-profile__item_active' : ''
          }`
        }
        to='/schedule'
      >
        Расписание
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `navigation-profile__item ${
            isActive ? 'navigation-profile__item_active' : ''
          }`
        }
        to='/favorites'
      >
        Избранное
      </NavLink>
    </nav>
  );
}
