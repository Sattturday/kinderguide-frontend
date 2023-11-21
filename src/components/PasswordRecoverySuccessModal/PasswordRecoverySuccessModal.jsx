import { useDispatch, useSelector } from 'react-redux';

import { Popup } from '../common/Popup';
import { Button } from '../common/Button';
import './PasswordRecoverySuccessModal.scss';
import { closeAllModals, openLoginModal } from '../../store/modalsSlice';

export const PasswordRecoverySuccessModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoverySuccessModal
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeAllModals());
    dispatch(openLoginModal());
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} name='message-modal'>
      <h2 className='popup__title popup__title_centered'>
        Пароль успешно изменен
      </h2>
      <Button
        type='button'
        width='100%'
        size='large'
        color={'fill'}
        onClick={(e) => {
          handleSubmit(e);
        }}
        className='popup__submit-button'
      >
        Войти
      </Button>
    </Popup>
  );
};
