import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Recurses';
import { InputPassword } from '../../components/InputPassword';

export function Home() {
  return (
    <>
      <Promo />
      <InputPassword variant='password' />
      <Resources />
    </>
  );
}
