import { useState } from 'react';
import './InputPassword.scss';
import { Input } from '../common/Input';
import HidePassword from '../../images/Input/HidePassword.svg';
import ShowPassword from '../../images/Input/ShowPassword.svg';
import { Button } from '../common/Button';

export const InputPassword = ({
  inputId,
  labelText = 'test',
  errorText,
  name,
  onChange,
  placeholder,
  value,
  isValid,
  forgetPassword, // Ю. Предполагаю сюда переменную boolean для отображения надписи "забыли пароль?" на нужных полях
}) => {
  const [type, setType] = useState('password');
  const handleEyeToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <div className='inputPassword'>
      <Input
        isValid={isValid}
        name={name}
        inputId={inputId}
        labelText={labelText}
        onChange={onChange}
        value={value}
        variant='password'
        placeholder={placeholder}
        type={type}
        errorText={errorText}
        minLength='8'
      />
      {forgetPassword && (
        <div className='inputPassword__forgetPassword'>
          <Button variant='link' size='small'>
            Забыли пароль?
          </Button>
        </div>
      )}
      <div className='inputPassword__passwordIcon'>
        <Button variant='link' size='small' onClick={handleEyeToggle}>
          <img
            className='inputPassword__passwordImg'
            src={type === 'password' ? ShowPassword : HidePassword}
            alt={type === 'password' ? 'show' : 'hide'}
          />
        </Button>
      </div>
    </div>
  );
};
