import { useSelector } from 'react-redux';
import './SelectFilter.scss';

// Функциональный компонент для отображения чекбокса
export function SelectFilter({
  option,
  name, // Название для чекбокса
  type = 'select-filter', // Тип чекбокса (по умолчанию - 'checkbox')
  labelName, // Текст метки для чекбокса
  isChecked, // Переменная состояния для определения выбранности чекбокса
  onChange, // Функция обработки изменений состояния чекбокса
}) {
  return (
    <div className='select-filter'>
      <label
        htmlFor={option.slug} // Указание соответствия метки и чекбокса
        className={`select-filter__label${
          isChecked ? ' select-filter__label_checked' : ''
        }`}
      >
        {option.name} {/* Отображаем текст метки чекбокса */}
        <input
          type='checkbox' // Указание типа чекбокса
          className={`select-filter__input input-${type}`}
          name={option.slug} // Указание имени чекбокса
          id={option.slug} // Уникальный идентификатор чекбокса
          checked={isChecked || false} // Установка состояния чекбокса
          onChange={() => onChange(option)} // Обработчик события изменения состояния чекбокса
        />
      </label>
    </div>
  );
}
