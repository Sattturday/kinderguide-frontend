import { useSelector, useDispatch } from 'react-redux';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import {
  useLoginMutation,
  useLoginWithYandexMutation,
} from '../../api/authApi';
import { setUser, setToken } from '../../store/authSlice';
import { closeAllModals, openRegisterModal } from '../../store/modalsSlice';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputPassword } from '../InputPassword';
import { Button } from '../common/Button';
import './LoginModal.scss';

import { YandexLogin } from '../YandexLogin/YandexLogin';
import { LineWithWord } from '../common/LineWithWord';
import { setIndex } from '../../store/reviewPopupSlice';

export const LoginModal = () => {
  const { data, onChange, errors, isValid } = useFormAndValidation();
  const isOpen = useSelector((state) => state.modals.isOpenLoginModal);

  const [login, { isLoading }] = useLoginMutation();
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

  const handleRegisterClick = () => {
    dispatch(closeAllModals());
    dispatch(openRegisterModal());
    dispatch(setIndex(''));
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
      // console.log('response', response);
      // console.log('response?.data?.access', response?.data?.access);

      if (!response?.data?.access) {
        // console.log('выкидываем ошибку');
        throw new Error('Ошибка. Не получил токен яндекса');
      }

      localStorage.setItem('token', response?.data?.access);
      // const userData = await response.json();

      // console.log('авторизируем');
      dispatch(
        setUser({
          user: true,
        })
      );
      dispatch(
        setToken({
          token: response?.data?.access,
        })
      );
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Popup isOpen={isOpen} name='login-modal' title='Вход'>
        <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
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
            width='100%'
            size='large'
            color={isValid ? 'fill' : 'dis'}
            disabled={!isValid && isLoading}
            className='login-form__button'
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>
        </form>
        <Button
          type='button'
          width='100%'
          color='empty'
          size='large'
          className='login-form__button'
          onClick={handleRegisterClick}
        >
          Зарегистрироваться
        </Button>
        <LineWithWord text='или' />

        <YandexLogin
          clientID={clientID}
          onSuccess={(data) => handleYandexLogin(data)}
        >
          <Button
            type='button'
            width='100%'
            color='empty'
            size='large'
            className='login-form__button'
          >
            Войти через Яндекс ID
          </Button>
        </YandexLogin>

        {/* <YandexLogin2
          clientID='39d6510b37da4e88bb71a191ae780a50'
          onSuccess={(data) => console.log(data)}
        >
          <Button type='button' width='532px' color='empty' size='large'>
            Войти с помощью Яндекс ID2
          </Button>
        </YandexLogin2> */}
      </Popup>
    </>
  );
};
