import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  useSyncFavoriteKindergartensMutation,
  useSyncFavoriteSchoolsMutation,
} from '../api/userApi';

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

  const [favoritesCount, setFavoritesCount] = useState(() => {
    const storedFavoritesCount = JSON.parse(
      localStorage.getItem('favoritesCount')
    );
    return storedFavoritesCount || { kindergarten: 0, school: 0 };
  });

  const [isSynced, setIsSynced] = useState(false);

  const [syncFavoriteKindergartens] = useSyncFavoriteKindergartensMutation();
  const [syncFavoriteSchools] = useSyncFavoriteSchoolsMutation();

  const updateFavoritesCount = () => {
    const kindergartenCount = Object.keys(favorites.kindergarten || {}).length;
    const schoolCount = Object.keys(favorites.school || {}).length;

    setFavoritesCount({
      kindergarten: kindergartenCount,
      school: schoolCount,
    });

    // Сохраняем обновленное значение счетчика в локальное хранилище
    localStorage.setItem(
      'favoritesCount',
      JSON.stringify({
        kindergarten: kindergartenCount,
        school: schoolCount,
      })
    );
  };

  const addFavorite = (id, type) => {
    setFavorites((prev) => ({
      ...prev,
      [type]: { ...(prev[type] || {}), [id]: true },
    }));
  };

  const removeFavorite = (id, type) => {
    setFavorites((prev) => {
      const updatedFavorites = {
        ...prev,
        [type]: { ...(prev[type] || {}), [id]: false },
      };
      delete updatedFavorites[type][id]; // Удаляем элемент из избранного
      return updatedFavorites;
    });
  };

  const isFavorite = (id, type) => {
    return favorites[type]?.[id] || false;
  };

  const resetFavorites = () => {
    setFavorites({});
    setFavoritesCount({
      kindergarten: 0,
      school: 0,
    });
    setIsSynced(false);
  };
  useEffect(() => {
    // Обновляем счетчик при каждом изменении favorites
    updateFavoritesCount();
  }, [favorites]);

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

      syncFavoriteKindergartens({ kindergartens: favoriteKindergartens })
        .unwrap()
        .then((updatedKindergartens) => {
          // Обновляем локальное состояние favorites для детских садов
          setFavorites((prev) => ({
            ...prev,
            kindergarten: updatedKindergartens.reduce((acc, card) => {
              acc[card.id] = true;
              return acc;
            }, {}),
          }));

          // Обновляем избранные детские сады в LS на основе пришедших данных
          const localKindergartenFavorites =
            JSON.parse(localStorage.getItem('localKindergartenFavorites')) ||
            [];

          updatedKindergartens.forEach((updatedKindergarten) => {
            // Проверяем, есть ли такой объект в localKindergartenFavorites
            const existingIndex = localKindergartenFavorites.findIndex(
              (localKindergarten) =>
                localKindergarten.id === updatedKindergarten.id
            );

            // Если объект не найден, добавляем его в localKindergartenFavorites
            if (existingIndex === -1) {
              localKindergartenFavorites.push({
                ...updatedKindergarten,
                isLiked: true, // Добавляем свойство isLiked
              });
            }
          });

          // Сохраняем обновленные избранные детские сады в локальное хранилище
          localStorage.setItem(
            'localKindergartenFavorites',
            JSON.stringify(localKindergartenFavorites)
          );
        })
        .catch((error) => {
          console.error('Error syncing kindergartens:', error);
        });

      syncFavoriteSchools({ school: favoriteSchools })
        .unwrap()
        .then((updatedSchools) => {
          // Обновляем локальное состояние favorites для школ
          setFavorites((prev) => ({
            ...prev,
            school: updatedSchools.reduce((acc, card) => {
              acc[card.id] = true;
              return acc;
            }, {}),
          }));

          // Обновляем избранные детские школы в LS на основе пришедших данных
          const localSchoolFavorites =
            JSON.parse(localStorage.getItem('localSchoolFavorites')) || [];

          updatedSchools.forEach((updatedSchool) => {
            // Проверяем, есть ли такой объект в localSchoolFavorites
            const existingIndex = localSchoolFavorites.findIndex(
              (localSchool) => localSchool.id === updatedSchool.id
            );

            // Если объект не найден, добавляем его в localSchoolFavorites
            if (existingIndex === -1) {
              localSchoolFavorites.push({
                ...updatedSchool,
                isLiked: true, // Добавляем свойство isLiked
              });
            }
          });

          // Сохраняем обновленные избранные детские школы в локальное хранилище
          localStorage.setItem(
            'localSchoolFavorites',
            JSON.stringify(localSchoolFavorites)
          );
        })
        .catch((error) => {
          console.error('Error syncing schools:', error);
        });

      // Помечаем, что синхронизация выполнена
      setIsSynced(true);
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
      value={{
        addFavorite,
        removeFavorite,
        isFavorite,
        resetFavorites,
        favoritesCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
