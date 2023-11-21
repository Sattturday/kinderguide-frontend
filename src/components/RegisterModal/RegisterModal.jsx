import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useCreateUserMutation } from '../../api/authApi';
import { closeAllModals } from '../../store/modalsSlice';
import { setUser, setToken } from '../../store/authSlice';
import { useLoginMutation } from '../../api/authApi';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputTel } from '../InputTel';
import { InputPassword } from '../InputPassword';
import { InputCheckbox } from '../InputCheckbox';
import { Button } from '../common/Button';
import { LineWithWord } from '../common/LineWithWord';
import { YandexLogin } from '../YandexLogin/YandexLogin';

import { useLoginWithYandexMutation } from '../../api/authApi';

import './RegisterModal.scss';

export const RegisterModal = () => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const { data, setData, onChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const isOpen = useSelector((state) => state.modals.isOpenRegisterModal);

  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] =
    useLoginMutation();
  const [loginWithYandex] = useLoginWithYandexMutation();

  const clientID = '6afee0ba90144d71804d1029ef2849fa'; // Эдика

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser(data).unwrap();
      resetForm();
      setIsConfirm(false);

      dispatch(closeAllModals());

      const userData = await login({
        email: response.email,
        password: data['password'],
      }).unwrap();

      localStorage.setItem('token', userData.access);

      dispatch(
        setUser({
          user: response,
        })
      );
      dispatch(
        setToken({
          token: userData.access,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
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
      console.log('response', response);
      console.log('response?.data?.access', response?.data?.access);

      if (!response?.data?.access) {
        console.log('выкидываем ошибку');
        throw new Error('Ошибка. Не получил токен яндекса');
      }

      localStorage.setItem('token', response?.data?.access);
      // const userData = await response.json();

      console.log('авторизируем');
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

  // Проверка всех полей формы на валидность
  // экзотические инпуты проверяются в самой форме

  useEffect(() => {
    if (data?.phone && isConfirm && isValid) {
      // Это костыль, чтобы провалидировать инпут телефона из библиотечки
      if (!data?.phone?.includes('_')) {
        setIsReadyToSubmit(true);
      } else {
        setIsReadyToSubmit(false);
      }
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data?.phone, isValid, isConfirm]);

  return (
    <Popup isOpen={isOpen} name='register-modal' title='Регистрация'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className='register-form'
      >
        <InputWrapper
          inputId='first_name'
          variant='form'
          labelText='Имя'
          errorText={errors['first_name']}
        >
          <Input
            pattern='^[А-Яа-яA-Za-z]+$'
            inputId='first_name'
            variant='form'
            name='name'
            onChange={onChange}
            value={data?.first_name || ''}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['first_name']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='last_name'
          variant='form'
          labelText='Фамилия'
          errorText={errors['last_name']}
        >
          <Input
            pattern='^[А-Яа-яA-Za-z]+$'
            inputId='last_name'
            variant='form'
            name='lastname'
            onChange={onChange}
            value={data?.last_name || ''}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['last_name']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='phone'
          variant='form'
          labelText='Телефон'
          errorText={errors['phone']}
        >
          <InputTel
            inputId='phone'
            name='phone'
            onChange={onChange}
            value={data?.phone || ''}
            isValid={!data?.phone?.includes('_')}
          />
        </InputWrapper>

        <InputWrapper
          inputId='email'
          variant='form'
          labelText='Email'
          errorText={errors['email']}
        >
          <Input
            inputId='email'
            variant='form'
            name='email'
            onChange={onChange}
            value={data?.email || ''}
            placeholder='Введите email'
            type='email'
            isValid={!errors['email']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='password'
          variant='form'
          labelText='Пароль'
          errorText={errors['password']}
        >
          <InputPassword
            inputId='password'
            variant='form'
            name='password'
            onChange={onChange}
            value={data?.password || ''}
            placeholder='Введите пароль'
            isValid={!errors['password']?.length}
          />
        </InputWrapper>

        <InputCheckbox
          variant='terms'
          text
          type='checkbox'
          isChecked={isConfirm}
          onChange={() => {
            setIsConfirm(!isConfirm);
          }}
        />
        <Button
          type='submit'
          width='100%'
          size='large'
          color={isReadyToSubmit ? 'fill' : 'dis'}
          disabled={!isReadyToSubmit & isLoading}
          className='register-form__button'
        >
          {isLoading ? 'Подождите' : 'Зарегистрироваться'}
        </Button>
      </form>
      <LineWithWord text='Или' />
      <YandexLogin
        clientID={clientID}
        onSuccess={(data) => handleYandexLogin(data)}
      >
        <Button
          type='button'
          width='100%'
          color='empty'
          size='large'
          className='register-form__button'
        >
          Войти через Яндекс ID
        </Button>
      </YandexLogin>
    </Popup>
  );
};
