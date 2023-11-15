import { useEffect, useState } from 'react';
import { Stars } from '../../Stars';
import './Feedback.scss';
import addIcon from './images/fi-rr-edit.svg';
import { useDispatch } from 'react-redux';
import {
  openAddSchoolReviewModal,
  openAddKindergartenReviewModal,
} from '../../../store/modalsSlice';

export const Feedback = ({ feedback, org }) => {
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    org === 'Школы'
      ? dispatch(openAddSchoolReviewModal())
      : dispatch(openAddKindergartenReviewModal());
  };

  useEffect(() => {
    if (feedback.length === 0) {
      setRating(0);
      return;
    }
    setRating(
      (
        feedback?.reduce((acc, cur) => acc + cur.grade, 0) / feedback.length
      ).toFixed(1)
    );
  }, [feedback]);

  return (
    <div className='feedback'>
      <div className='feedback__header'>
        <div className='feedback__rating'>
          <span>{rating}</span>
          <Stars rating={rating || 0} />
          <p>
            {feedback.length === 0
              ? 'Отзывов пока нет'
              : feedback.length === 1
              ? '1 отзыв'
              : feedback.length < 5
              ? `${feedback.length} отзыва`
              : `${feedback.length} отзывов`}
          </p>
        </div>
        <div onClick={() => handleAddClick()} className='feedback__add'>
          <img src={addIcon} alt='Добавить отзыв' />
          <span>Написать отзыв</span>
        </div>
      </div>
      <div className='feedback__list'>
        {feedback?.map((fb) => (
          <div key={fb.id} className='feedback__item'>
            <div className='feedback__titleWrapper'>
              <h3 className='feedback__title'>{fb.author}</h3>
              <Stars rating={fb.grade} />
            </div>
            <p className='feedback__text'>{fb.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
