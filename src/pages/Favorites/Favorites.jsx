import { useState } from 'react';

import {
  useGetKindergartenAllQuery,
  useGetKindergartenFavoritesQuery,
  useGetKindergartenQuery,
} from '../../api/kindergartenApi';
import {
  useGetSchoolAllQuery,
  useGetSchoolFavoritesQuery,
} from '../../api/schoolApi';
import { ShowList } from '../../components/ShowList';

import { NavigationFavorites } from './components/NavigationFavorites';
import './Favorites.scss';

export function Favorites() {
  const [stateProfile, setStateProfile] = useState('all');

  const { data: dataKindergartenFavorites = [] } =
    useGetKindergartenFavoritesQuery();
  const { data: dataSchoolFavorites = [] } = useGetSchoolFavoritesQuery();

  const dataFavorites =
    stateProfile === 'school'
      ? dataSchoolFavorites.results
      : dataKindergartenFavorites.results;

  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          <NavigationFavorites
            stateProfile={stateProfile}
            setStateProfile={setStateProfile}
          />
          <ShowList
            data={dataFavorites}
            selected='favorites'
            stateProfile={stateProfile}
          />
        </div>
      </div>
    </section>
  );
}
