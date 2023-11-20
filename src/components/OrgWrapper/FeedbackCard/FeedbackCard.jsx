import { Stars } from '../../Stars';
import { useDispatch } from 'react-redux';
import { openReviewModal } from '../../../store/modalsSlice';
import {
  setAuthor,
  setGrade,
  setContent,
  setIndex,
} from '../../../store/reviewPopupSlice';

import './FeedbackCard.scss';
export const FeedbackCard = ({ index, fb }) => {
  const dispatch = useDispatch();

  const handleOpenPopupClick = () => {
    dispatch(openReviewModal());
    dispatch(setAuthor(fb.author));
    dispatch(setGrade(fb.grade));
    dispatch(setContent(fb.content));
    dispatch(setIndex(index));
    console.log(index);
  };
  return (
    <div className='feedback__item' onClick={handleOpenPopupClick}>
      <div className='feedback__titleWrapper'>
        <h3 className='feedback__title'>{fb.author}</h3>
        <Stars rating={fb.grade} />
      </div>
      <p className='feedback__text'>{fb.content}</p>
    </div>
  );
};
