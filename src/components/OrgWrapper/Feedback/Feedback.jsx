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
import { FeedbackCard } from '../FeedbackCard';
import { setIndex } from '../../../store/reviewPopupSlice';

import Star from '../../../images/Stars/Star-filled.svg';

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
      dispatch(setIndex('none'));
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
      <div className='feedback__grid'>
        <h2 className='feedback__sectionHeader'>Отзывы</h2>
        <div className='feedback__header'>
          <div className='feedback__rating'>
            <span className='feedback__ratingValue'>{rating}</span>
            <div className='stars'>
              <Stars rating={rating || 0} />
            </div>
            <img className='starsSmall' src={Star} alt='*' />
            <p className='feedback__quantity'>
              {feedback.length === 0
                ? 'Отзывов пока нет'
                : feedback.length === 1
                  ? '1 отзыв'
                  : feedback.length < 5
                    ? `${feedback.length} отзыва`
                    : `${feedback.length} отзывов`}
            </p>
          </div>
        </div>
        <div
          ref={buttonRef}
          onClick={() => handleAddClick()}
          className='feedback__add'
        >
          <span>Написать отзыв</span>
          <img src={addIcon} alt='Написать отзыв' />
        </div>
      </div>
      <div className='feedback__list'>
        {feedback?.slice(0, displayedCards).map((fb, index) => (
          <FeedbackCard key={fb.id} fb={fb} index={index} />
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
