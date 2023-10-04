import React from 'react';
import { string } from 'prop-types';
import { Button } from '../Button/Button';
import './EmptyPage.scss';

export function EmptyPage({ title, text }) {
  return (
    <section className='empty-page'>
      <h1 className={`empty-page__title ${!text && 'empty-page__title_empty'}`}>
        {title}
      </h1>
      {text && <p className='empty-page__text'>{text}</p>}
      <Button variant='square'>Перейти в каталог</Button>
    </section>
  );
}

EmptyPage.propTypes = {
  title: string,
  text: string,
};

EmptyPage.defaultProps = {
  title: '',
  text: '',
};
