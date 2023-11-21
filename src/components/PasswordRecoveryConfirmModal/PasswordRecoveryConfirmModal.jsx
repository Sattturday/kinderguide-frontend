import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useConfirmResetPasMutation } from '../../api/authApi';
import { InputPassword } from '../InputPassword';
import { InputWrapper } from '../common/InputWrapper';
import { Button } from '../common/Button';
import { Popup } from '../common/Popup';

import './PasswordRecoveryConfirmModal.scss';

// stepRecovery -  шаг восстановления.
// пока что  варианты 1 - ввод почты & 2 - создание пароля
export const PasswordRecoveryConfirmModal = ({ id, token }) => {
  const { data, onChange, errors, setErrors, isValid } = useFormAndValidation();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoveryConfirmModal
  );

  const [createNewPass, { isLoading, isError }] = useConfirmResetPasMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createNewPass({
        new_password: data['password-recovery-form-password'],
        re_new_password: data['password-recovery-form-password-repeat'],
        uid: id,
        token: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
    <Popup
      isOpen={isOpen}
      name='password-recovery-modal'
      title='Восстановление пароля'
    >
      <form className='new-password-form'>
        <fieldset className='new-password-form__fieldset'>
          <legend className='new-password-form__fieldset-legend'>
            Введите новый пароль
          </legend>
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
              value={data['password-recovery-form-password'] || ''}
              placeholder='Введите пароль'
              isValid={!errors['password-recovery-form-password']?.length}
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
              value={data['password-recovery-form-password-repeat'] || ''}
              placeholder='Введите пароль'
              isValid={
                !errors['password-recovery-form-password-repeat']?.length
              }
            />
          </InputWrapper>
        </fieldset>
        <Button
          type='submit'
          width='100%'
          size='large'
          color={isReadyToSubmit ? 'fill' : 'dis'}
          disabled={!isReadyToSubmit && isLoading}
          onClick={(e) => {
            handleSubmit(e);
          }}
          className='new-password-form__button'
        >
          Отправить
        </Button>
      </form>
    </Popup>
  );
};
