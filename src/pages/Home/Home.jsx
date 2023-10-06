import React from 'react';
import './Home.scss';
import { InputCheckbox } from '../../components/InputCheckbox';
import { Sort } from '../../components/common/Sort';
import { NotFoundPage } from '../NotFoundPage';
import { News } from './components/News';
<<<<<<< HEAD
import { Input } from '../../components/common/Input';
=======
import Form from '../../components/StylesForForms/Form';
>>>>>>> develop

export function Home() {
  return (
    <div>
      Home
      <News />
      <InputCheckbox />
      <Sort />
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
      <NotFoundPage />
    </div>
  );
}
