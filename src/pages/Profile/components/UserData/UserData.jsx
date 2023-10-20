import React from 'react';
import './UserData.scss';
import { Button } from '../../../../components/common/Button';
import { useGetUserQuery } from '../../../../api/userApi';

export function UserData({ setEditUser }) {
  const { data = {}, isLoading } = useGetUserQuery();

  return (
    <>
      <div className='user__wrapper user__wrapper_top'>
        <p className='user__label'>Имя родителя</p>
        <p className='user__text'>
          {isLoading ? ' ' : `${data.first_name} ${data.last_name}`}
        </p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Имя ребёнка</p>
        <p className='user__text'>
          {isLoading ? ' ' : `${data.child_first_name} ${data.child_last_name}`}
        </p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Телефон</p>
        <p className='user__text'>{isLoading ? ' ' : `${data.phone}`}</p>
      </div>
      <div className='user__wrapper user__wrapper_bottom'>
        <p className='user__label'>Email</p>
        <p className='user__text'> {isLoading ? ' ' : `${data.email}`}</p>
      </div>
      <Button
        type='button'
        width='188px'
        size='medium'
        color='orange-fill'
        onClick={(e) => {
          setEditUser(true);
        }}
      >
        Изменить
      </Button>
    </>
  );
}
