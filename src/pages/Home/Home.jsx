import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { InputTel } from '../../components/InputTel';
import { InputWrapper } from '../../components/common/InputWrapper';
import { Resources } from './components/Resources';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';

export function Home() {
  return (
    <>
      <Promo />
      <InputWrapper labelText='test' errorText='test'>
        <InputTel />
      </InputWrapper>
      <About />
      <ServiceWork />
      <Resources />
    </>
  );
}
