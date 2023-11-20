import React, { useEffect, useState } from 'react';
import { User } from './components/User/User';
import './Profile.scss';
import { useGetUserQuery } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/authSlice';

export function Profile() {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(false);

  const { data = {}, isLoading, isError, refetch } = useGetUserQuery();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      refetch();

      // dispatch(setToken({ token: token }));
      // dispatch(setUser({ user: data }));
    }
  }, [token]);
  return (
    <section className={`profile ${editUser ? 'profile__user-edit' : ''}`}>
      <div className='wrapper'>
        <h1 className='profile__title'>Личный кабинет</h1>
        <User editUser={editUser} setEditUser={setEditUser} />
      </div>
    </section>
  );
}
