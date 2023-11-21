import { useState } from 'react';
import { useDispatch } from 'react-redux';

import HidePassword from '../../images/Input/HidePassword.svg';
import ShowPassword from '../../images/Input/ShowPassword.svg';
import { openPasswordRecoveryModal } from '../../store/modalsSlice';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import './InputPassword.scss';
import { setIndex } from '../../store/reviewPopupSlice';

export const InputPassword = ({
  inputId,
  name,
  onChange,
  placeholder,
  value,
  isValid,
  forgetPassword,
}) => {
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
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
        onChange={onChange}
        value={value}
        variant='password'
        placeholder={placeholder}
        type={type}
        minLength='8'
      />
      {forgetPassword && (
        <div className='inputPassword__forgetPassword'>
          <Button
            variant='link'
            size='small'
            onClick={() => {
              dispatch(openPasswordRecoveryModal());
              dispatch(setIndex('none'));
            }}
          >
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
