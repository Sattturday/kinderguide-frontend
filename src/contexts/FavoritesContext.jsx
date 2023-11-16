import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useSyncFavoriteKindergartensMutation,
  useSyncFavoriteSchoolsMutation,
} from '../api/userApi';
import { useGetKindergartenFavoritesQuery } from '../api/kindergartenApi';
import { useGetSchoolFavoritesQuery } from '../api/schoolApi';
const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  const [favorites, setFavorites] = useState(() => {
    // Пытаемся получить сохраненные favorites из локального хранилища
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    return storedFavorites || {};
  });
  const [isSynced, setIsSynced] = useState(false);

  const [syncFavoriteKindergartens] = useSyncFavoriteKindergartensMutation();
  const [syncFavoriteSchools] = useSyncFavoriteSchoolsMutation();

  const addFavorite = (id, type) => {
    setFavorites((prev) => ({
      ...prev,
      [type]: { ...(prev[type] || {}), [id]: true },
    }));
  };

  const removeFavorite = (id, type) => {
    setFavorites((prev) => ({
      ...prev,
      [type]: { ...(prev[type] || {}), [id]: false },
    }));
  };

  const isFavorite = (id, type) => {
    return favorites[type]?.[id] || false;
  };

  // useEffect(() => {
  //   if (!isSynced && user) {
  //     // Выполняем синхронизацию с сервером при входе
  //     const favoriteKindergartens = favorites.kindergarten
  //       ? Object.keys(favorites.kindergarten)
  //           .filter((id) => favorites.kindergarten[id])
  //           .map((id) => parseInt(id, 10))
  //       : [];
  //     const favoriteSchools = favorites.school
  //       ? Object.keys(favorites.school)
  //           .filter((id) => favorites.school[id])
  //           .map((id) => parseInt(id, 10))
  //       : [];

  //     syncFavoriteKindergartens({ kindergartens: favoriteKindergartens });
  //     syncFavoriteSchools({ school: favoriteSchools });

  //     // Помечаем, что синхронизация выполнена
  //     setIsSynced(true);
  //   }
  // }, [
  //   favorites,
  //   user,
  //   isSynced,
  //   syncFavoriteKindergartens,
  //   syncFavoriteSchools,
  // ]);

  useEffect(() => {
    if (!isSynced && user) {
      // Выполняем синхронизацию с сервером при входе
      const favoriteKindergartens = favorites.kindergarten
        ? Object.keys(favorites.kindergarten)
            .filter((id) => favorites.kindergarten[id])
            .map((id) => parseInt(id, 10))
        : [];
      const favoriteSchools = favorites.school
        ? Object.keys(favorites.school)
            .filter((id) => favorites.school[id])
            .map((id) => parseInt(id, 10))
        : [];

      syncFavoriteKindergartens({ kindergartens: favoriteKindergartens });
      syncFavoriteSchools({ school: favoriteSchools })
        .unwrap()
        .then((updatedFavorites) => {
          console.log('hi');
          // Обновляем избранное в приложении с использованием полученных данных
          setFavorites(updatedFavorites);

          // Помечаем, что синхронизация выполнена
          setIsSynced(true);
        })
        .catch((error) => {
          // Обработка ошибок при обновлении избранного
          console.error('Failed to sync favorites:', error);
        });
    }
  }, [
    favorites,
    user,
    isSynced,
    syncFavoriteKindergartens,
    syncFavoriteSchools,
  ]);

  useEffect(() => {
    // Сохраняем favorites в локальное хранилище при каждом изменении
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
