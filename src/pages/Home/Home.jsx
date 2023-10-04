import React from 'react';
import { InputCheckbox } from '../../components/InputCheckbox';
import { Sort } from '../../components/common/Sort/Sort';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { News } from './components/News';

export function Home() {
  return (
    <div>
      Home
      <News />
      <InputCheckbox />
      <Sort />
      <NotFoundPage />
    </div>
  );
}
