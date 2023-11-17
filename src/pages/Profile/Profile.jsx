import React, { useEffect } from 'react';
import { User } from './components/User/User';
import './Profile.scss';
import { useGetUserQuery } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/authSlice';

export function Profile() {
  const dispatch = useDispatch();

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
    <section className='profile'>
      <div className='wrapper'>
        <h1 className='profile__title'>Личный кабинет</h1>
        <User />
      </div>
    </section>
  );
}
