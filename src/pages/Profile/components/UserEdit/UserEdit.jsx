import React from 'react';
import './UserEdit.scss';
import { InputWrapper } from '../../../../components/common/InputWrapper';
import { Input } from '../../../../components/common/Input';
import { Button } from '../../../../components/common/Button';

export function UserEdit({ setEditUser }) {
  return (
    <form className='user-edit__form'>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Имя родителя</p>
        <InputWrapper labelText='Имя' inputId='parent-name' variant='info'>
          <Input
            inputId='parent-name'
            variant='info'
            name='parent-name'
            onChange={() => {}}
            placeholder='Введите имя'
            type='text'
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='parent-lastname'
          variant='info'
        >
          <Input
            inputId='parent-lastname'
            variant='info'
            name='parent-lastname'
            onChange={() => {}}
            placeholder='Введите фамилию'
            type='text'
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Имя ребенка</p>
        <InputWrapper labelText='Имя' inputId='child-name' variant='info'>
          <Input
            inputId='child-name'
            variant='info'
            name='child-name'
            onChange={() => {}}
            placeholder='Введите имя'
            type='text'
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='child-lastname'
          variant='info'
        >
          <Input
            inputId='child-lastname'
            variant='info'
            name='child-lastname'
            onChange={() => {}}
            placeholder='Введите фамилию'
            type='text'
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Телефон</p>
        <InputWrapper labelText='Телефон' inputId='phone' variant='info'>
          <Input
            variant='info'
            inputId='phone'
            name='phone'
            placeholder='Введите телефон'
            type='tel'
            onChange={() => {}}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Email</p>
        <InputWrapper labelText='Email' inputId='email' variant='info'>
          <Input
            inputId='email'
            variant='info'
            name='email'
            onChange={() => {}}
            placeholder='Введите email'
            type='email'
          />
        </InputWrapper>
      </div>
      <div className='user-edit__btns'>
        <Button
          type='submit'
          width='188px'
          size='medium'
          color='fill'
          // disabled={!isValid}
          // onClick={(e) => {
          //   e.preventDefault();
          //   onSubmit();
          // }}
        >
          Изменить
        </Button>
        <Button
          type='submit'
          width='188px'
          size='medium'
          color='empty'
          onClick={(e) => {
            e.preventDefault();
            setEditUser(false);
          }}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
}
