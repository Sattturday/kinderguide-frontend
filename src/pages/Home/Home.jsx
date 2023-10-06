import React from 'react';
import './Home.scss';
import { InputCheckbox } from '../../components/InputCheckbox';
import { Sort } from '../../components/common/Sort';
import { NotFoundPage } from '../NotFoundPage';
import { News } from './components/News';
import Form from '../../components/StylesForForms/Form';

export function Home() {
  return (
    <div>
      Home
      <News />
      <InputCheckbox />
      <Sort />
      <Form title='Регистрация' variant='login' button='Register' />
      <Form
        title='Восстановление пароля ..................................................'
        variant='recovery'
        subtitle='test'
        button='Recover'
      >
        <p className='test'>
          Не получили email? Проверьте спам или{' '}
          <a href='www.example.com'>попробуйте снова</a>
        </p>
        <img src='https://via.placeholder.com/217x197/' alt='people' />
      </Form>
      <NotFoundPage />
    </div>
  );
}
