import { useSelector } from 'react-redux';
import './ProfielExitModal.scss';
import { Popup } from '../common/Popup';
import { Button } from '../common/Button';

export const ProfielExitModal = () => {
  const isOpen = useSelector((state) => state.modals.isOpenExitProfileModal);

  return (
    <Popup isOpen={isOpen} name='profile-modal'>
      <h2 className='profile-modal__title'>
        Вы уверены, что хотите выйти из аккаунта?
      </h2>
      <div className='user-edit__btns'>
        <Button
          type='submit'
          width='188px'
          size='medium'
          color={'fill'}
          onClick={(e) => {}}
        >
          Остаться
        </Button>
        <Button
          type='button'
          width='188px'
          size='medium'
          color='empty'
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Выйти
        </Button>
      </div>
    </Popup>
  );
};
