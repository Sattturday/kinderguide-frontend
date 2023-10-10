import './RegisterModal.scss';
import { useEffect, useState } from 'react';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputTel } from '../InputTel';
import { InputPassword } from '../InputPassword';
import { InputCheckbox } from '../InputCheckbox';
import { Button } from '../common/Button';

export const RegisterModal = ({ isOpen, onClose, onSubmit = () => {} }) => {
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({
    'reg-name': '',
    'reg-lastname': '',
    'reg-phone': '',
    'reg-email': '',
    'reg-password': '',
    'reg-password-repeat': '',
    isConfirm: false,
  });
  const [error, setError] = useState({
    'reg-name': ' ',
    'reg-lastname': ' ',
    'reg-phone': ' ',
    'reg-email': ' ',
    'reg-password': ' ',
    'reg-password-repeat': ' ',
    isConfirm: false,
  });

  const isFormValid = () => {
    return Object.values(error).every((item) => item === '' || item === true);
  };

  // Проверка сопадения паролей
  const isPassEqual = () => {
    return data['reg-password'] === data['reg-password-repeat'];
  };

  // Обработчик изменения инпутов формы
  const onChange = (e) => {
    console.log(e.target.validity.valid);
    //Ошибка на инпут повторения пароля выставляется отдельно
    if (e.target.id !== 'reg-password-repeat') {
      setError({ ...error, [e.target.id]: e.target.validationMessage });
    }

    setData({ ...data, [e.target.id]: e.target.value });
  };

  // Проверяем валидность формы
  useEffect(() => {
    setIsValid(isFormValid());
  }, [data]);

  // Проверям совпадение паролей для выставления ошибки
  useEffect(() => {
    if (!isPassEqual()) {
      setError({ ...error, 'reg-password-repeat': 'Пароли не совпадают' });
    } else {
      setError({ ...error, 'reg-password-repeat': '' });
    }
  }, [data['reg-password'], data['reg-password-repeat']]);

  return (
    <Popup isOpen={isOpen} onClose={onClose} name='register-modal'>
      <h2 className='register-modal__title'>Регистрация</h2>
      <form>
        <InputWrapper
          inputId='reg-name'
          variant='form'
          labelText='Имя'
          errorText={error['reg-name']}
        >
          <Input
            inputId='reg-name'
            variant='form'
            name='reg-name'
            onChange={onChange}
            value={data['reg-name']}
            placeholder='Введите имя'
            type='text'
          />
        </InputWrapper>

        <InputWrapper
          inputId='reg-lastname'
          variant='form'
          labelText='Фамилия'
          errorText={error['reg-lastname']}
        >
          <Input
            inputId='reg-lastname'
            variant='form'
            name='reg-lastname'
            onChange={onChange}
            value={data['reg-lastname']}
            placeholder='Введите фамилию'
            type='text'
          />
        </InputWrapper>

        <InputWrapper
          inputId='reg-phone'
          variant='form'
          labelText='Телефон'
          errorText={error['reg-phone']}
        >
          <InputTel
            inputId='reg-phone'
            name='reg-phone'
            onChange={onChange}
            value={data['reg-phone']}
          />
        </InputWrapper>

        <InputWrapper
          inputId='reg-email'
          variant='form'
          labelText='Email'
          errorText={error['reg-email']}
        >
          <Input
            inputId='reg-email'
            variant='form'
            name='reg-email'
            onChange={onChange}
            value={data['reg-email']}
            placeholder='Введите email'
            type='email'
          />
        </InputWrapper>

        <InputWrapper
          inputId='reg-password'
          variant='form'
          labelText='Пароль'
          errorText={error['reg-password']}
        >
          <InputPassword
            inputId='reg-password'
            variant='form'
            name='reg-password'
            onChange={onChange}
            value={data['reg-password']}
            placeholder='Введите пароль'
          />
        </InputWrapper>

        <InputWrapper
          inputId='reg-password-repeat'
          variant='form'
          labelText='Пароль повторно'
          errorText={error['reg-password-repeat']}
        >
          <InputPassword
            inputId='reg-password-repeat'
            variant='form'
            name='reg-password-repeat'
            onChange={onChange}
            value={data['reg-password-repeat']}
            placeholder='Повторите пароль'
          />
        </InputWrapper>

        <InputCheckbox
          isChecked={data.isConfirm}
          onChange={() => {
            setData({ ...data, isConfirm: !data.isConfirm });
            setError({ ...error, isConfirm: !error.isConfirm });
          }}
        />
        <Button
          type='submit'
          width='408px'
          size='large'
          color={isValid ? 'fill' : 'empty'}
          disabled={!isValid}
          onClick={(e) => {
            e.preventDefault();
            onSubmit(data);
            console.log(data);
          }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </Popup>
  );
};
