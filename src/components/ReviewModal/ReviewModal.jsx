import { useSelector } from 'react-redux';

import { Popup } from '../common/Popup';

import './ReviewModal.scss';
import { Stars } from '../Stars';

export const ReviewModal = () => {
  const isOpen = useSelector((state) => state.modals.isOpenReviewModal);
  const author = useSelector((state) => state.reviewPopup.author);
  const grade = useSelector((state) => state.reviewPopup.grade);
  const content = useSelector((state) => state.reviewPopup.content);
  return (
    <>
      <Popup isOpen={isOpen} name='review-modal'>
        <div className='review-modal__item'>
          <div className='review-modal__titleWrapper'>
            <h3 className='review-modal__title'>{author}</h3>
            <Stars rating={grade} />
          </div>
          <p className='review-modal__text'>{content}</p>
        </div>
      </Popup>
    </>
  );
};
