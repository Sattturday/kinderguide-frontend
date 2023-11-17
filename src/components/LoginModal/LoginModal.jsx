import { useSelector, useDispatch } from 'react-redux';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import {
  useLoginMutation,
  useLoginWithYandexMutation,
} from '../../api/authApi';
import { setUser, setToken } from '../../store/authSlice';
import { closeAllModals } from '../../store/modalsSlice';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputPassword } from '../InputPassword';
import { Button } from '../common/Button';
import './LoginModal.scss';

import { YandexLogin } from '../YandexLogin/YandexLogin';
import { LineWithWord } from '../common/LineWithWord';
import { useState } from 'react';

export const LoginModal = () => {
  const { data, onChange, errors, isValid } = useFormAndValidation();
  const isOpen = useSelector((state) => state.modals.isOpenLoginModal);

  const [login, { isLoading, isError }] = useLoginMutation();
  const [loginWithYandex] = useLoginWithYandexMutation();
  const dispatch = useDispatch();

  // const clientID = '39d6510b37da4e88bb71a191ae780a50'; // Мой
  const clientID = '6afee0ba90144d71804d1029ef2849fa'; // Эдика

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email: data['login-form-email'],
        password: data['login-form-password'],
      }).unwrap();
      localStorage.setItem('token', response.access);
      // const userData = await response.json();

      dispatch(
        setUser({
          user: true,
        })
      );
      dispatch(
        setToken({
          token: response.access,
        })
      );
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  const handleYandexLogin = async (data) => {
    console.log('отправляем на сервер', data);

    const formData = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

    try {
      const response = await loginWithYandex(formData);

      if (!response?.success) {
        throw new Error('Ошибка. Не получил токен яндекса');
      }

      localStorage.setItem('token', response?.access);
      // const userData = await response.json();

      dispatch(
        setUser({
          user: true,
        })
      );
      dispatch(
        setToken({
          token: response?.access,
        })
      );
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Popup isOpen={isOpen} name='login-modal'>
        <h2 className='login-modal__title'>Вход</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <InputWrapper
            inputId='login-form-email'
            variant='form'
            labelText='Email'
            errorText={errors['login-form-email']}
          >
            <Input
              inputId='login-form-email'
              variant='form'
              name='email'
              onChange={onChange}
              value={data['login-form-email'] || ''}
              placeholder='Введите email'
              type='email'
              isValid={!errors['login-form-email']?.length}
            />
          </InputWrapper>

          <InputWrapper
            inputId='login-form-password'
            variant='form'
            labelText='Пароль'
            errorText={errors['login-form-password']}
          >
            <InputPassword
              inputId='login-form-password'
              variant='form'
              name='password'
              onChange={onChange}
              value={data['login-form-password'] || ''}
              placeholder='Введите пароль'
              isValid={!errors['login-form-password']?.length}
              forgetPassword
            />
          </InputWrapper>

          <Button
            type='submit'
            width='532px'
            size='large'
            color={isValid ? 'orange-fill' : 'orange-dis'}
            disabled={!isValid && isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>
        </form>
        <LineWithWord text='или' />

        <YandexLogin
          clientID={clientID}
          onSuccess={(data) => handleYandexLogin(data)}
        >
          <Button type='button' width='532px' color='orange-empty' size='large'>
            Войти с помощью Яндекс ID
          </Button>
        </YandexLogin>

        {/* <YandexLogin2
          clientID='39d6510b37da4e88bb71a191ae780a50'
          onSuccess={(data) => console.log(data)}
        >
          <Button type='button' width='532px' color='orange-empty' size='large'>
            Войти с помощью Яндекс ID2
          </Button>
        </YandexLogin2> */}
      </Popup>
    </>
  );
};
