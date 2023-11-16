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
    // здесь можно сохранить избранное в LS
  }, [id, type, isFavorite]);

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
