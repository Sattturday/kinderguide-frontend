import React from 'react';
import './NavigationFavorites.scss';

export function NavigationFavorites({
  stateProfile,
  setStateProfile,
  favoritesData,
}) {
  const handleClick = (data) => {
    setStateProfile(data);
  };

  return (
    <nav className='navigation-favorites'>
      {favoritesData.map((item) => (
        <button
          key={`button-${item.name}`}
          className={
            stateProfile === item.name
              ? 'navigation-favorites__item navigation-favorites__item_active'
              : 'navigation-favorites__item'
          }
          onClick={() => handleClick(item.name)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}
