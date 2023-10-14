import { useEffect, useState, useCallback } from 'react';
import { validateEmail } from '../constants/utils';

// Хук проверяет ТОЛЬКО соответствие  инпутов их атрибутам.
// Не проверяет чекбоксы и  идентичность паролей
// Их проверку надо делать уже непосредственно в компоненте самой формы
export function useFormAndValidation() {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});

  const onChange = (e) => {
    console.log('меняем инпут');
    setData({ ...data, [e.target.id]: e.target.value });
    setIsValid(e.target.closest('form').checkValidity());

    // Емейл валидируем отдельно и выставляем ошибку
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setErrors({
          ...errors,
          [e.target.id]: 'E-mail введен некорректно. Пример: edukids@yandex.ru',
        });
      } else {
        setErrors({
          ...errors,
          [e.target.id]: '',
        });
      }
      return;
    }
    // Ошибку повтора пароля обрабатываем отдельно в юзЕфеекте
    if (
      e.target.id === 'password-repeat' ||
      e.target.id === 'password-recovery-form-password-repeat'
    ) {
      console.log('вводим поле повтора');
      return;
    }

    if (e.target.id === 'phone') {
      console.log('инпут телефона');
      return;
    }

    console.log('нет ифов, выставляем ошибку');
    setErrors({
      ...errors,
      [e.target.id]: e.target.validationMessage,
    });
  };

  // эффект срабатывает только если в форме есть инпут password-repeat
  // выставляет ошибку при несовпадении паролей
  useEffect(() => {
    // если начали вводить один из двух инпутов
    if (data['password-repeat'] || data['password']) {
      // если они не совпадают, выставляем ошибку
      if (data?.password !== data['password-repeat']) {
        console.log('пароли не совпадают, выставляем ошибку');
        setErrors({
          ...errors,
          'password-repeat': 'Пароли не совпадают',
        });
      }
      // если совпадают, сбрасываем ошибку
      else {
        console.log('пароли  совпадают');
        setErrors({
          ...errors,
          'password-repeat': '',
        });
      }
    }
  }, [data]);

  // const resetForm = useCallback(
  //   (newFormValue = {}, newErrors = {}, newIsValid = false) => {
  //     setData(newFormValue);
  //     setErrors(newErrors);
  //     setIsValid(newIsValid);
  //   },
  //   [setData, setErrors, setIsValid]
  // );

  return {
    data,
    setData,
    onChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    // resetForm,
  };
}
