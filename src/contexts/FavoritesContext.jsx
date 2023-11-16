import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({});

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

  useEffect(() => {
    // Возможно, здесь можно добавить логику сохранения favorites в localStorage
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
