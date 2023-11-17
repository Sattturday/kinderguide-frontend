import './LoginToReviewPopup.scss';
import { LoginToActionPopup } from '../common/LoginToActionPopup';
import { useSelector } from 'react-redux';

export const LoginToReviewPopup = () => {
  const isOpen = useSelector((state) => state.modals.isOpenLoginToReviewPopup);
  const popupData = useSelector((state) => state.modals.loginToReviewPopupData);
  return (
    <LoginToActionPopup isOpen={isOpen} popupData={popupData}>
      <p>
        Чтобы написать отзыв вам необходимо зарегистрироваться
        или авторизоваться.
      </p>
    </LoginToActionPopup>
  );
};
