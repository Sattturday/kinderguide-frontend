import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openLoginToFavoritePopup } from '../../store/modalsSlice';
import './LikeButton.scss';

export const LikeButton = ({ isLiked, onLike }) => {
  const user = useSelector((state) => state.auth.user);
  const isLoginToFavoritePopupShown = useSelector(
    (state) => state.modals.loginToFavoritePopupShown
  );
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  const handleLike = (e) => {
    e.stopPropagation();
    if (user) {
      onLike();
    } else {
      if (!isLoginToFavoritePopupShown) {
        // Получаем DOM-элемент кнопки и ее координаты
        const buttonElement = buttonRef.current;
        const buttonRect = buttonElement.getBoundingClientRect();

        // Определяем координаты left и top
        const coordinates = {
          left: buttonRect.left,
          top: buttonRect.top + 30, // Добавляем высоту кнопки
        };
        dispatch(openLoginToFavoritePopup(coordinates));
      }
      onLike();
    }
  };

  return (
    <button
      className={`like-button${isLiked ? ' like-button_active' : ''}`}
      ref={buttonRef}
      type='button'
      onClick={handleLike}
    />
  );
};
