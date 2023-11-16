import { useDispatch } from 'react-redux';

import { openLoginModal, openRegisterModal } from '../../../store/modalsSlice';
import { PositionedPopup } from '../PositionedPopup';
import { Button } from '../Button';
import './LoginToActionPopup.scss';

export const LoginToActionPopup = ({ children, isOpen, popupData }) => {
  const widthPopup = 450;
  const dispatch = useDispatch();

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
        <Button
          type='button'
          size='small'
          width='188px'
          onClick={() => dispatch(openLoginModal())}
        >
          Войти
        </Button>
      </div>
    </PositionedPopup>
  );
};
