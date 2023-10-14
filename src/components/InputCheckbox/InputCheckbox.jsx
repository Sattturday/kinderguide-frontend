import React from 'react';
import './InputCheckbox.scss';

export function InputCheckbox({
  name,
  type,
  variant,
  labelName,
  text,
  isChecked,
  onChange,
}) {
  return (
    <div className={`checkbox checkbox__variant_${variant}`}>
      <label
        htmlFor={name}
        className={`checkbox-label__variant_${variant} ${
          isChecked ? `checkbox-label__${variant}_checked` : ''
        }`}
      >
        {labelName}
        <input
          type={type}
          className={`checkbox__input input-${type}`}
          name={name}
          id={name}
          checked={isChecked || false}
          onChange={onChange}
        />
      </label>
      {text && (
        <p className='checkbox__text'>
          Соглашаюсь с условиями использования
          <br /> и политикой конфиденциальности
        </p>
      )}
    </div>
  );
}
