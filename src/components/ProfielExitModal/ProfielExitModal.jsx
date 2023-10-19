import { useDispatch, useSelector } from 'react-redux';
import './ProfielExitModal.scss';
import { Popup } from '../common/Popup';
import { Button } from '../common/Button';
import { closeAllModals } from '../../store/modalsSlice';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../../store/authSlice';

export const ProfielExitModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector((state) => state.modals.isOpenExitProfileModal);
  //закрытие модалки
  const hanldeCloseModal = () => {
    dispatch(closeAllModals());
  };

  // выход из акаунта
  function signOut() {
    navigate('/');
    dispatch(
      setCredentials({
        user: false,
        token: null,
      })
    );
    dispatch(closeAllModals());
  }

  return (
    <Popup isOpen={isOpen} name='profile-modal'>
      <h2 className='profile-modal__title'>
        Вы уверены, что хотите выйти из аккаунта?
      </h2>
      <div className='user-edit__btns'>
        <Button
          type='button'
          width='188px'
          size='medium'
          color={'fill'}
          onClick={hanldeCloseModal}
        >
          Остаться
        </Button>
        <Button
          type='button'
          width='188px'
          size='medium'
          color='orange-empty'
          onClick={signOut}
        >
          Выйти
        </Button>
      </div>
    </Popup>
  );
};
