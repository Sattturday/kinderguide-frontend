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
  value,
  placeholder,
  forgetPassword,
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
    <Input
      name={name}
      id={inputId}
      labelText={labelText}
      onChange={onChange}
      value={value}
      variant='password'
      placeholder={placeholder}
      type={type}
      errorText={errorText}
      forgetPassword={forgetPassword}
    >
      <div className='inputPassword'>
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
              src={type === 'password' ? HidePassword : ShowPassword}
              alt={type === 'password' ? 'hide' : 'show'}
            />
          </Button>
        </div>
      </div>
    </Input>
  );
};
