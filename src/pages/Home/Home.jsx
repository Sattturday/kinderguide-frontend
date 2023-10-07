import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { Recurses } from './components/Recurses';

export function Home() {
  return (
    <>
      <Promo />
      <Recurses />
    </>
  );
}
