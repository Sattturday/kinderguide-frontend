import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetKindergartenFavoritesQuery } from '../../api/kindergartenApi';
import { useGetSchoolFavoritesQuery } from '../../api/schoolApi';
import { ShowList } from '../../components/ShowList';

import { NavigationFavorites } from './components/NavigationFavorites';
import './Favorites.scss';

export function Favorites() {
  // Локальные состояния для управления текущим типом вкладки избранного
  const [stateProfile, setStateProfile] = useState('all');

  // Получаем избранные элементы из API
  const { data: dataKindergartenFavorites = [] } =
    useGetKindergartenFavoritesQuery();
  const { data: dataSchoolFavorites = [] } = useGetSchoolFavoritesQuery();

  // Получаем данные из локального хранилища для неавторизованного пользователя
  const localSchoolFavorites =
    JSON.parse(localStorage.getItem('localSchoolFavorites')) || [];
  const localKindergartenFavorites =
    JSON.parse(localStorage.getItem('localKindergartenFavorites')) || [];

  // Получаем информацию о пользователе из Redux
  const user = useSelector((state) => state.auth.user);

  // Формируем данные для отображения в компоненте ShowList
  let dataToShow = [];

  if (user) {
    // Дополнительная логика для авторизованного пользователя
    if (stateProfile === 'school') {
      dataToShow = dataSchoolFavorites?.results || [];
    } else if (stateProfile === 'gardens') {
      dataToShow = dataKindergartenFavorites?.results || [];
    } else {
      dataToShow = [
        ...(dataSchoolFavorites?.results || []),
        ...(dataKindergartenFavorites?.results || []),
      ];
    }
  } else {
    // Логика для неавторизованного пользователя
    if (stateProfile === 'school') {
      dataToShow = localSchoolFavorites;
    } else if (stateProfile === 'gardens') {
      dataToShow = localKindergartenFavorites;
    } else {
      dataToShow = [...localSchoolFavorites, ...localKindergartenFavorites];
    }
  }

  // Возвращаем разметку компонента
  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          {/* Компонент для навигации между типами профилей */}
          <NavigationFavorites
            stateProfile={stateProfile}
            setStateProfile={setStateProfile}
          />
          {/* Компонент для отображения списка избранных элементов */}
          <ShowList data={dataToShow} selected='favorites' />
        </div>
      </div>
    </section>
  );
}
