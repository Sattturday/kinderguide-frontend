import React, { useState } from 'react';

import { UserEdit } from '../UserEdit/UserEdit';
import { UserData } from '../UserData/UserData';
import './User.scss';

export function User({ editUser, setEditUser }) {
  return (
    <section className={`user ${editUser ? 'user__edit' : ''}`}>
      {editUser ? (
        <UserEdit setEditUser={setEditUser} />
      ) : (
        <UserData setEditUser={setEditUser} />
      )}
    </section>
  );
}
