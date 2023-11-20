import { useState } from 'react';

import { favoriteOrg } from '../../utils/emptyPageMessage';
import { ShowList } from '../../components/ShowList';
import { EmptyPage } from '../../components/common/EmptyPage';

import { NavigationFavorites } from './components/NavigationFavorites';
import { DropDown } from '../../components/common/DropDown';
import { FavoritesFilters } from './config';
import './Favorites.scss';

export function Favorites() {
  // Локальные состояния для управления текущим типом вкладки избранного
  const [stateProfile, setStateProfile] = useState('all');

  const localSchoolFavorites =
    JSON.parse(localStorage.getItem('localSchoolFavorites')) || [];
  const localKindergartenFavorites =
    JSON.parse(localStorage.getItem('localKindergartenFavorites')) || [];

  // Формируем данные для отображения в компоненте ShowList
  let dataToShow = [];

  if (stateProfile === 'school') {
    dataToShow = localSchoolFavorites;
  } else if (stateProfile === 'gardens') {
    dataToShow = localKindergartenFavorites;
  } else {
    dataToShow = [...localSchoolFavorites, ...localKindergartenFavorites];
  }

  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          <NavigationFavorites
            stateProfile={stateProfile}
            setStateProfile={setStateProfile}
            favoritesData={FavoritesFilters}
          />
          <DropDown
            selectedDefault={stateProfile}
            items={FavoritesFilters}
            onSelect={setStateProfile}
          />
          {dataToShow.length === 0 ? (
            <EmptyPage variant='favorite' data={favoriteOrg} />
          ) : (
            <ShowList data={dataToShow} selected='favorites' />
          )}
        </div>
      </div>
    </section>
  );
}
