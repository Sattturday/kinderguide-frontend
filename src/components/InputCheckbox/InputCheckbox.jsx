import React from 'react';
import './InputCheckbox.scss';

// Функциональный компонент для отображения чекбокса
export function InputCheckbox({
  name, // Название для чекбокса
  type = 'checkbox', // Тип чекбокса (по умолчанию - 'checkbox')
  variant, // Вариант стилизации
  labelName, // Текст метки для чекбокса
  text = false, // Флаг, указывающий на наличие текстовой информации после чекбокса
  isChecked, // Переменная состояния для определения выбранности чекбокса
  onChange, // Функция обработки изменений состояния чекбокса
}) {
  return (
    <div className={`checkbox checkbox__variant_${variant}`}>
      <label
        htmlFor={name} // Указание соответствия метки и чекбокса
        className={`checkbox-label__variant_${variant} ${
          isChecked ? `checkbox-label__${variant}_checked` : ''
        }`}
      >
        {labelName} {/* Отображаем текст метки чекбокса */}
        <input
          type={type} // Указание типа чекбокса
          className={`checkbox__input input-${type}`} // Стилизация чекбокса
          name={name} // Указание имени чекбокса
          id={name} // Уникальный идентификатор чекбокса
          checked={isChecked || false} // Установка состояния чекбокса
          onChange={onChange} // Обработчик события изменения состояния чекбокса
        />
      </label>
      {/* Отображение текста, если флаг 'text' установлен */}
      {text && (
        <p className='checkbox__text'>
          Я принимаю условия{' '}
          <a href='/#' className='checkbox__link'>
            Пользовательского соглашения
          </a>{' '}
          и соглашаюсь с{' '}
          <a href='/#' className='checkbox__link'>
            Политикой конфиденциальности.
          </a>
        </p>
      )}
    </div>
  );
}
