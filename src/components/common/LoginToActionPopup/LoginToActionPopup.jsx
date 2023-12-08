import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  closeAllModals,
  openLoginModal,
  openRegisterModal,
} from '../../../store/modalsSlice';
import { PositionedPopup } from '../PositionedPopup';
import { Button } from '../Button';
import './LoginToActionPopup.scss';

export const LoginToActionPopup = ({ children, isOpen, popupData }) => {
  const widthPopup = 450;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals());
      }
    };
  }, [isOpen, dispatch]);

  return (
    <PositionedPopup
      isOpen={isOpen}
      name='login-to-favorite'
      left={popupData?.left - widthPopup}
      top={popupData?.top + 10}
    >
      <div className='popup-favorite'>
        {children}
        <p className='popup-favorite__register'>
          В первый раз здесь?&nbsp;
          <button type='button' onClick={() => dispatch(openRegisterModal())}>
            Зарегистрируйтесь
          </button>
        </p>
        <div className='popup-favorite__buttonContainer'>
          <Button
            type='button'
            size='small'
            width='188px'
            color='empty'
            onClick={() => dispatch(closeAllModals())}
          >
            Понятно
          </Button>
          <Button
            type='button'
            size='small'
            width='188px'
            onClick={() => dispatch(openLoginModal())}
          >
            Войти
          </Button>
        </div>
      </div>
    </PositionedPopup>
  );
};
