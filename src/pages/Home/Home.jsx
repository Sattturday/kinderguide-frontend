import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Recurses';

export function Home() {
  return (
    <>
      <Promo />
      <Resources />
    </>
  );
}
