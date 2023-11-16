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

  const resetFavorites = () => {
    setFavorites({});
  };

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
      value={{ addFavorite, removeFavorite, isFavorite, resetFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
