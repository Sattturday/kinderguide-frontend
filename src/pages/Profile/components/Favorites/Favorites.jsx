import React from 'react';

import { ShowList } from '../../../../components/ShowList/ShowList';
import './Favorites.scss';

export function Favorites({ stateProfile }) {
  return (
    <section className='favorites'>
      {stateProfile === 'school' ? <ShowList /> : ''}
      {stateProfile === 'gardens' ? <ShowList /> : ''}
      {stateProfile === 'all' ? <ShowList /> : ''}
    </section>
  );
}
