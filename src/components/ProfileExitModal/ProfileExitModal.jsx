import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { closeAllModals } from '../../store/modalsSlice';
import { setToken, setUser } from '../../store/authSlice';
//import { setCredentials } from '../../store/authSlice';
import { Popup } from '../common/Popup';
import { Button } from '../common/Button';
import './ProfileExitModal.scss';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

export const ProfileExitModal = () => {
  const { resetFavorites } = useFavoritesContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector((state) => state.modals.isOpenExitProfileModal);
  //закрытие модалки
  const hanldeCloseModal = () => {
    dispatch(closeAllModals());
  };

  // выход из акаунта
  function signOut() {
    localStorage.clear();
    resetFavorites();
    navigate('/');

    //   dispatch(setToken(null));
    dispatch(setUser(false));
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
          size='small'
          color={'orange-fill'}
          onClick={hanldeCloseModal}
        >
          Остаться
        </Button>
        <Button
          type='button'
          width='188px'
          size='small'
          color='orange-empty'
          onClick={signOut}
        >
          Выйти
        </Button>
      </div>
    </Popup>
  );
};
