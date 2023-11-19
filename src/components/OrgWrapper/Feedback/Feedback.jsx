import React, { useEffect, useState, useRef } from 'react';
import { Stars } from '../../Stars';
import './Feedback.scss';
import addIcon from './images/fi-rr-edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAddSchoolReviewModal,
  openAddKindergartenReviewModal,
  openLoginToReviewPopup,
} from '../../../store/modalsSlice';
import { AddMoreButton } from '../../AddMoreButton';

export const Feedback = ({ feedback, org }) => {
  const user = useSelector((state) => state.auth.user);
  const [rating, setRating] = useState(null);
  const [displayedCards, setDisplayedCards] = React.useState(6);

  const dispatch = useDispatch();
  const buttonRef = useRef(null);

  const handleAddClick = () => {
    if (user) {
      org === 'Школы'
        ? dispatch(openAddSchoolReviewModal())
        : dispatch(openAddKindergartenReviewModal());
    } else {
      const buttonElement = buttonRef.current;
      const buttonRect = buttonElement.getBoundingClientRect();
      const coordinates = {
        left: buttonRect.left + 110,
        top: buttonRect.top + 20,
      };

      dispatch(openLoginToReviewPopup(coordinates));
    }
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
        <div
          ref={buttonRef}
          onClick={() => handleAddClick()}
          className='feedback__add'
        >
          <img src={addIcon} alt='Добавить отзыв' />
          <span>Написать отзыв</span>
        </div>
      </div>
      <div className='feedback__list'>
        {feedback?.slice(0, displayedCards).map((fb) => (
          <div key={fb.id} className='feedback__item'>
            <div className='feedback__titleWrapper'>
              <h3 className='feedback__title'>{fb.author}</h3>
              <Stars rating={fb.grade} />
            </div>
            <p className='feedback__text'>{fb.content}</p>
          </div>
        ))}
      </div>
      <AddMoreButton
        cards={feedback}
        count={6}
        displayedCards={displayedCards}
        setDisplayedCards={setDisplayedCards}
      />
    </div>
  );
};
