import './AddMoreButton.module.scss';
import { Button } from '../common/Button';
import React from 'react';

export const AddMoreButton = ({
  cards,
  count,
  displayedCards,
  setDisplayedCards,
}) => {
  function addMoreCards() {
    setDisplayedCards(displayedCards + count);
  }

  console.log(cards.length);
  console.log(displayedCards);
  return (
    <>
      {displayedCards < cards.length ? (
        <div className='feedback__container-for-button'>
          <Button
            variant='square'
            color='blue-empty'
            size='small'
            type='button'
            children='Показать еще'
            width='298px'
            onClick={addMoreCards}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
