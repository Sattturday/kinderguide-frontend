import React from 'react';
import { InputCheckbox } from '../../components/InputCheckbox';
import { Sort } from '../../components/common/Sort/Sort';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export function Home() {
  return (
    <div>
      Home
      <InputCheckbox />
      <Sort />
      <NotFoundPage />
    </div>
  );
}
