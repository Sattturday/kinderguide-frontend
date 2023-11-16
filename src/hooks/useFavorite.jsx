import { useEffect } from 'react';

import { useFavoritesContext } from '../contexts/FavoritesContext';
import {
  useAddKindergartenFavoritesMutation,
  useRemoveKindergartenFavoritesMutation,
} from '../api/kindergartenApi';
import {
  useAddSchoolFavoritesMutation,
  useRemoveSchoolFavoritesMutation,
} from '../api/schoolApi';

const useFavorite = (cardData) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const [addSchoolFavorites] = useAddSchoolFavoritesMutation();
  const [removeSchoolFavorites] = useRemoveSchoolFavoritesMutation();
  const [addKindergartenFavorites] = useAddKindergartenFavoritesMutation();
  const [removeKindergartenFavorites] =
    useRemoveKindergartenFavoritesMutation();

  const id = cardData.id;
  const type = cardData.type;

  useEffect(() => {
    const localFavoritesKey =
      type === 'school' ? 'localSchoolFavorites' : 'localKindergartenFavorites';

    // Получаем текущий массив избранных из локального хранилища
    const localFavorites =
      JSON.parse(localStorage.getItem(localFavoritesKey)) || [];

    // Проверяем, лайкнута ли карточка
    const isLiked = isFavorite(id, type);

    // Проверяем, есть ли карточка уже в массиве
    const cardIndex = localFavorites.findIndex(
      (item) => item.id === id && item.type === type
    );

    // Если карточка лайкнута и есть в массиве, обновляем ее статус
    if (isLiked && cardIndex !== -1) {
      localFavorites[cardIndex] = { ...cardData, isLiked: true };
      localStorage.setItem(localFavoritesKey, JSON.stringify(localFavorites));
    } else if (isLiked) {
      // Если карточки нет в массиве, добавляем новую
      localFavorites.push({ ...cardData, isLiked: true });
      localStorage.setItem(localFavoritesKey, JSON.stringify(localFavorites));
    } else {
      // Если лайк снят, удаляем карточку из массива избранных
      const updatedFavorites = localFavorites.filter(
        (item) => item.id !== id || item.type !== type
      );

      // Сохраняем обновленный массив в локальное хранилище
      localStorage.setItem(localFavoritesKey, JSON.stringify(updatedFavorites));
    }
  }, [id, type, isFavorite(id, type)]); // Обновленная зависимость

  const handleLike = () => {
    if (type === 'kindergarten') {
      const mutation = isFavorite(id, type)
        ? removeKindergartenFavorites(id)
        : addKindergartenFavorites(id);
      mutation.then(() =>
        isFavorite(id, type) ? removeFavorite(id, type) : addFavorite(id, type)
      );
    }

    if (type === 'school') {
      const mutation = isFavorite(id, type)
        ? removeSchoolFavorites(id)
        : addSchoolFavorites(id);
      mutation.then(() =>
        isFavorite(id, type) ? removeFavorite(id, type) : addFavorite(id, type)
      );
    }
  };

  return { isLiked: isFavorite(id, type), handleLike };
};

export default useFavorite;
