import { useEffect, useState } from 'react';
import {
  useAddKindergartenFavoritesMutation,
  useGetKindergartenFavoritesQuery,
} from '../../api/kindergartenApi';
import {
  useAddSchoolFavoritesMutation,
  useGetSchoolFavoritesQuery,
} from '../../api/schoolApi';
import { ShowList } from '../../components/ShowList';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { NavigationFavorites } from './components/NavigationFavorites';
import './Favorites.scss';
import { useSelector } from 'react-redux';
import {
  useSyncFavoriteKindergartensMutation,
  useSyncFavoriteSchoolsMutation,
} from '../../api/userApi';

export function Favorites() {
  const user = useSelector((state) => state.auth.user);

  // Локальные состояния для управления текущим типом профиля и избранными элементами
  const [stateProfile, setStateProfile] = useState('all');
  // const [localSchoolFavorites, setLocalSchoolFavorites] = useLocalStorage(
  //   'schoolFavorites',
  //   []
  // );
  // const [localKindergartenFavorites, setLocalKindergartenFavorites] =
  //   useLocalStorage('kindergartenFavorites', []);

  // Получаем избранные элементы из API
  const { data: dataKindergartenFavorites = [] } =
    useGetKindergartenFavoritesQuery();
  const { data: dataSchoolFavorites = [] } = useGetSchoolFavoritesQuery();

  // Формируем данные для отображения в компоненте ShowList
  const dataFavorites =
    stateProfile === 'school'
      ? dataSchoolFavorites?.results || []
      : stateProfile === 'gardens'
      ? dataKindergartenFavorites?.results || []
      : [
          ...(dataSchoolFavorites?.results || []),
          ...(dataKindergartenFavorites?.results || []),
        ];

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
          <ShowList data={dataFavorites} selected='favorites' />
        </div>
      </div>
    </section>
  );
}
