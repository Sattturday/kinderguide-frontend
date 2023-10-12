import React, { useState } from 'react';
import './Profile.scss';
import { UserEdit } from './components/UserEdit/UserEdit';
import { User } from './components/User/User';
import { NavigationProfile } from './components/NavigationProfile/NavigationProfile';
import { BreadCrumb } from './components/BreadCrumb/BreadCrumb';

export function Profile() {
  const [editUser, setEditUser] = useState(false);
  return (
    <section className='profile'>
      <div className='wrapper'>
        <BreadCrumb />
        <h1 className='profile__title'>Личный кабинет</h1>
        <div className='profile__block'>
          <NavigationProfile />
          <section className='user'>
            <div className='user__avatar' />
            {editUser ? (
              <UserEdit setEditUser={setEditUser} />
            ) : (
              <User setEditUser={setEditUser} />
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
