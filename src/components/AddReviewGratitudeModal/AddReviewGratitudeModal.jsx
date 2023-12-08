import './AddReviewGratitudeModal.scss';

import { Popup } from '../common/Popup';
import { Button } from '../common/Button';

import { useDispatch, useSelector } from 'react-redux';
import { closeAllModals } from '../../store/modalsSlice';

export const AddReviewGratitudeModal = () => {
  const isOpen = useSelector((state) => state.modals.isOpenGratitudeModal);
  const dispatch = useDispatch();
  return (
    <Popup isOpen={isOpen} name='gratitude'>
      <h2 className='gratitude-modal__title'>Спасибо!</h2>
      <p className='gratitude-modal__text'>
        Делитесь вашим мнением чаще. Ваши отзывы и рейтинги помогают другим
        людям.
      </p>

      <Button
        type='button'
        size='large'
        width='520px'
        color='fill'
        onClick={() => dispatch(closeAllModals())}
      >
        Хорошо
      </Button>
    </Popup>
  );
};
