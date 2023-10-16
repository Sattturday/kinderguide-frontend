import './PasswordRecoveryModal.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';

import { InputPassword } from '../InputPassword';

import { Button } from '../common/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// stepRecovery -  шаг восстановления.
// пока что  варианты 1 - ввод почты & 2 - создание пароля
export const PasswordRecoveryModal = ({
  stepRecovery,

  onSubmit = () => {},
}) => {
  const { data, onChange, errors, setErrors, isValid } = useFormAndValidation();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoveryModal
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    console.log(data); // eslint-disable-line
  };

  // проверка валидности емейла для первого шага
  useEffect(() => {
    if (
      data['password-recovery-form-email']?.length &&
      !errors['password-recovery-form-email']?.length
    ) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data]); // eslint-disable-line

  // проверка валдиности для второго шага
  useEffect(() => {
    if (
      isValid &&
      data['password-recovery-form-password'] ===
        data['password-recovery-form-password-repeat']
    ) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data, isValid]);

  useEffect(() => {
    if (
      data['password-recovery-form-password'] !==
        data['password-recovery-form-password-repeat'] &&
      data['password-recovery-form-password-repeat']?.length
    ) {
      setErrors({
        ...errors,
        'password-recovery-form-password-repeat': 'Пароли не совпадают',
      });
    } else {
      setErrors({
        ...errors,
        'password-recovery-form-password-repeat': '',
      });
    }
  }, [data]); // eslint-disable-line

  return (
    <Popup isOpen={isOpen} name='password-recovery-modal'>
      <h2 className='password-recovery-modal__title'>Восстановление пароля</h2>

      {
        //Инструкция показывается только на 1м шаге восстановления
        stepRecovery === 1 && (
          <ol className='password-recovery-modal__instructions'>
            <li>Введите ваш email.</li>
            <li>Мы отправим вам ссылку. для восстановления пароля.</li>
            <li>По ссылке из письма можно будет восстановить пароль.</li>
          </ol>
        )
      }

      <form>
        {
          //Инпут почты показывается только на 1м шаге восстановления
          stepRecovery === 1 && (
            <InputWrapper
              inputId='password-recovery-form-email'
              variant='form'
              labelText='Email'
              errorText={errors['password-recovery-form-email']}
            >
              <Input
                inputId='password-recovery-form-email'
                variant='form'
                name='email'
                onChange={onChange}
                value={data['password-recovery-form-email']}
                placeholder='Введите email'
                type='email'
                isValid={!errors['password-recovery-form-email']?.length}
              />
            </InputWrapper>
          )
        }

        {
          //Инпуты паролей показывается только на 2м шаге восстановления
          stepRecovery === 2 && (
            <>
              <InputWrapper
                inputId='password-recovery-form-password'
                variant='form'
                labelText='Пароль'
                errorText={errors['password-recovery-form-password']}
              >
                <InputPassword
                  inputId='password-recovery-form-password'
                  variant='form'
                  name='password'
                  onChange={onChange}
                  value={data['password-recovery-form-password']}
                  placeholder='Введите пароль'
                  isValid={!errors['password-recovery-form-password']?.length}
                  forgetPassword
                />
              </InputWrapper>

              <InputWrapper
                inputId='password-recovery-form-password-repeat'
                variant='form'
                labelText='Пароль повторно'
                errorText={errors['password-recovery-form-password-repeat']}
              >
                <InputPassword
                  inputId='password-recovery-form-password-repeat'
                  variant='form'
                  name='password'
                  onChange={onChange}
                  value={data['password-recovery-form-password-repeat']}
                  placeholder='Введите пароль'
                  isValid={
                    !errors['password-recovery-form-password-repeat']?.length
                  }
                  forgetPassword
                />
              </InputWrapper>
            </>
          )
        }

        <Button
          type='submit'
          width='408px'
          size='large'
          color={isReadyToSubmit ? 'orange-fill' : 'orange-dis'}
          disabled={!isReadyToSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Отправить
        </Button>
      </form>
      {
        //сообщение показывается только на 1м шаге восстановления
        stepRecovery === 1 && (
          <p className='password-recovery-form__message'>
            Не получили email? Проверьте спам или <span>попробуйте снова</span>.
          </p>
        )
      }
    </Popup>
  );
};
