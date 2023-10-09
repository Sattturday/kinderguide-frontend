import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { InputTel } from '../../components/InputTel';
import { Resources } from './components/Recurses';
import { InputWrapper } from '../../components/common/InputWrapper';

export function Home() {
  return (
    <>
      <Promo />
      <InputWrapper labelText='test' errorText='test'>
        <InputTel />
      </InputWrapper>
      <Resources />
    </>
  );
}
