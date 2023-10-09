import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Resources';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';

export function Home() {
  return (
    <>
      <Promo />
      <About />
      <ServiceWork />
      <Resources />
    </>
  );
}
