import React from 'react';
import './Favorites.scss';
import { ShowList } from '../../../Catalog/components/ShowList';

export function Favorites({ stateProfile }) {
  return (
    <section className='favorites'>
      {stateProfile === 'school' ? <ShowList /> : ''}
      {stateProfile === 'gardens' ? <ShowList /> : ''}
      {stateProfile === 'courses' ? <ShowList /> : ''}
    </section>
  );
}
