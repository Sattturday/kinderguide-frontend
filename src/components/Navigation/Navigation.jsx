import { NavLink } from 'react-router-dom';

import { useFavoritesContext } from '../../contexts/FavoritesContext';
import './Navigation.scss';

// В зависимости от  места использования меняется ширина блока навигации
// За это отвечает пропс usedFor, применяющий модификатор
export const Navigation = ({ usedFor }) => {
  const { favoritesCount } = useFavoritesContext();
  const count = favoritesCount.school + favoritesCount.kindergarten;

  return (
    <nav className={`navigation navigation_${usedFor}`}>
      <NavLink
        to='/'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer'
            : isActive && usedFor === 'burger'
              ? 'navigation__item navigation__item_type_burger navigation__item_type_burger_active'
              : usedFor === 'burger'
                ? 'navigation__item navigation__item_type_burger'
                : isActive
                  ? 'navigation__item navigation__item_type_active'
                  : 'navigation__item';
        }}
      >
        Главная
      </NavLink>
      <NavLink
        to='/catalog'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer'
            : isActive && usedFor === 'burger'
              ? 'navigation__item navigation__item_type_burger navigation__item_type_burger_active'
              : usedFor === 'burger'
                ? 'navigation__item navigation__item_type_burger'
                : isActive
                  ? 'navigation__item navigation__item_type_active'
                  : 'navigation__item';
        }}
      >
        Образование
      </NavLink>
      <NavLink
        to='/favorites'
        className={({ isActive }) => {
          return usedFor === 'footer'
            ? 'navigation__item navigation__item_type_footer'
            : isActive && usedFor === 'burger'
              ? 'navigation__item navigation__item_type_burger navigation__item_type_burger_active'
              : usedFor === 'burger'
                ? 'navigation__item navigation__item_type_burger'
                : isActive
                  ? 'navigation__item navigation__item_type_active'
                  : 'navigation__item';
        }}
      >
        Избранное
        {(usedFor === 'header' || usedFor === 'burger') && count > 0 && (
          <span className='navigation__item-count'>{count ? count : ''}</span>
        )}
      </NavLink>
    </nav>
  );
};
