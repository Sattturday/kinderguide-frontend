import './LoginModal.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputPassword } from '../InputPassword';
import { Button } from '../common/Button';
import { useSelector } from 'react-redux';

export const LoginModal = ({ onSubmit = () => {} }) => {
  const { data, onChange, errors, isValid } = useFormAndValidation();
  const isOpen = useSelector((state) => state.modals.isOpenLoginModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    console.log(data); // eslint-disable-line
  };
  return (
    <Popup isOpen={isOpen} name='login-modal'>
      <h2 className='login-modal__title'>Вход</h2>
      <form>
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
            value={data['login-form-email']}
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
            value={data['login-form-password']}
            placeholder='Введите пароль'
            isValid={!errors['login-form-password']?.length}
            forgetPassword
          />
        </InputWrapper>

        <Button
          type='submit'
          width='408px'
          size='large'
          color={isValid ? 'fill' : 'empty'}
          disabled={!isValid}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Войти
        </Button>
      </form>
    </Popup>
  );
};
