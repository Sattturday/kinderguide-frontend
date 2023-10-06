import React from 'react';
import { InputCheckbox } from '../../components/InputCheckbox';
import { Sort } from '../../components/common/Sort/Sort';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { News } from './components/News';
import { Input } from '../../components/common/Input';

export function Home() {
  return (
    <div>
      Home
      <News />
      <InputCheckbox />
      <Sort />
      <Input labelText='form' variant='form' errorText='error' />
      <Input
        labelText='password'
        variant='password'
        errorText='error'
        isActive='true'
      />
      <Input labelText='info' variant='info' errorText='error' />
      <Input
        placeholder='search'
        variant='search'
        errorText='error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error error'
      />
      <Input placeholder='price' variant='price' />
      <NotFoundPage />
    </div>
  );
}
