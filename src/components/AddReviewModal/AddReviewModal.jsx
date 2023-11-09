import './AddReviewModal.scss';

import { Popup } from '../common/Popup';
import { Stars } from '../Stars';
import { Button } from '../common/Button';

import { useState } from 'react';

export const AddReviewModal = ({ isOpen, onSubmit, data, org, isLoading }) => {
  const [value, setValue] = useState('');
  const [stars, setStars] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      content: value,
      grade: stars,
    });
  };
  return (
    <Popup isOpen={isOpen} name='review'>
      <h2 className='add-review__title'>{`Отзыв  ${data?.name}`}</h2>
      <div className='add-review__stars-area'>
        <p>{`Оцените ${org === 'Школы' ? 'школу' : 'детский сад'}`}</p>
        <Stars rating={stars} setter={setStars} />
      </div>
      <form className='add-review__text-area' onSubmit={(e) => handleSubmit(e)}>
        <span>{`${value.length}/1000`}</span>
        <textarea
          placeholder='Введите отзыв...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type='submit'
          size='large'
          width='804px'
          color={stars ? 'orange-fill' : 'orange-empty'}
          disabled={!stars || isLoading}
        >
          Отправить отзыв
        </Button>
      </form>
    </Popup>
  );
};
