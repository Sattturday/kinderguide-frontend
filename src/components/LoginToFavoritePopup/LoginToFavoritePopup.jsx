import './LoginToFavoritePopup.scss';
import { LoginToActionPopup } from '../common/LoginToActionPopup';
import { useSelector } from 'react-redux';

export const LoginToFavoritePopup = () => {
  const isOpen = useSelector(
    (state) => state.modals.isOpenLoginToFavoritePopup
  );
  const popupData = useSelector(
    (state) => state.modals.loginToFavoritePopupData
  );
  return (
    <LoginToActionPopup isOpen={isOpen} popupData={popupData}>
      <h2 className='loginToFavourite__header'>Объект добавлен в избранное</h2>
      <p className='loginToFavourite__text'>
        Войдите в личный кабинет, чтобы сохранить избранное и просматривать
        его с других устройств
      </p>
    </LoginToActionPopup>
  );
};
