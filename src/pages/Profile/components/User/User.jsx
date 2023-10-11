import React from 'react';
import './User.scss';
import { Button } from '../../../../components/common/Button';

export function User({ setEditUser }) {
  return (
    <>
      <div className='user__wrapper user__wrapper_top'>
        <p className='user__label'>Имя родителя</p>
        <p className='user__text'>Иванов Иван</p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Имя ребёнка</p>
        <p className='user__text'>Иванов Иван</p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Телефон</p>
        <p className='user__text'>+7 912 222-22-22</p>
      </div>
      <div className='user__wrapper user__wrapper_bottom'>
        <p className='user__label'>Email</p>
        <p className='user__text'>mcdream@ya.ru</p>
      </div>
      <Button
        type='submit'
        width='188px'
        size='medium'
        color='fill'
        onClick={(e) => {
          e.preventDefault();
          setEditUser(true);
        }}
      >
        Изменить
      </Button>
    </>
  );
}
