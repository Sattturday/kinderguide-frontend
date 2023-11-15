import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import img from '../../../images/NewsCard/img5.png';
import { Stars } from '../../Stars';
import { LikeButton } from '../../LikeButton/LikeButton';
import './Card.scss';

import {
  useAddKindergartenFavoritesMutation,
  useGetKindergartenFavoritesQuery,
  useRemoveKindergartenFavoritesMutation,
} from '../../../api/kindergartenApi';
import {
  useAddSchoolFavoritesMutation,
  useGetSchoolFavoritesQuery,
  useRemoveSchoolFavoritesMutation,
} from '../../../api/schoolApi';
import { useSelector } from 'react-redux';

export const Card = ({ cardData, selected, stateProfile }) => {
  const [isLiked, setIsLiked] = useState(false);
  const image = cardData.album.length > 0 ? cardData.album[0].image : img;

  const navigate = useNavigate();

  const { filter } = useSelector((state) => state, { noopCheck: 'never' });
  const { data: dataKindergartenFavorites = [] } =
    useGetKindergartenFavoritesQuery();
  const { data: dataSchoolFavorites = [] } = useGetSchoolFavoritesQuery();
  const [addSchoolFavorites] = useAddSchoolFavoritesMutation();
  const [removeSchoolFavorites] = useRemoveSchoolFavoritesMutation();
  const [addKindergartenFavorites] = useAddKindergartenFavoritesMutation();
  const [removeKindergartenFavorites] =
    useRemoveKindergartenFavoritesMutation();

  useEffect(() => {
    setIsLiked(cardData.is_favorited);
  }, [cardData.is_favorited]);

  const handleLike = () => {
    if (stateProfile === 'gardens') {
      cardData.is_favorited
        ? removeKindergartenFavorites(cardData.id)
        : addKindergartenFavorites(cardData.id);
      setIsLiked(!isLiked);
    }
    if (stateProfile === 'school') {
      cardData.is_favorited
        ? removeSchoolFavorites(cardData.id)
        : addSchoolFavorites(cardData.id);
      setIsLiked(!isLiked);
    }
    if (filter.category === 'kindergartens') {
      const res = dataKindergartenFavorites.results
        .filter((card) => card.id === cardData.id)
        .map((res) => res.id);
      res.length > 0
        ? removeKindergartenFavorites(res)
        : addKindergartenFavorites(cardData.id);
      setIsLiked(!isLiked);
    }
    if (filter.category === 'schools') {
      const res = dataSchoolFavorites.results
        .filter((card) => card.id === cardData.id)
        .map((res) => res.id);
      res.length > 0
        ? removeSchoolFavorites(res)
        : addSchoolFavorites(cardData.id);
      setIsLiked(!isLiked);
    }
  };

  const handleClick = () => {
    navigate(`/${filter.category}/${cardData.id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
      <img className='card__img' src={image} alt='Фото школы или сада' />
      <div className='card__container'>
        <div className='card__title-block'>
          <h3 className='card__title'>{cardData.name}</h3>
          <LikeButton isLiked={isLiked} onLike={handleLike} />
        </div>

        <p className='card__text'>{cardData.description}</p>

        <div className='card__price-block'>
          <p className='card__price'>{`от ${cardData.price} ₽/мес.`}</p>
          <Stars rating={cardData.rating}>
            <p className='card__reviews'>{cardData.reviews || 0}</p>
          </Stars>
        </div>
      </div>
    </div>
  );
};
